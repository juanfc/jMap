
import {  ElementRef, Injectable, NgZone, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { LocalStorageService } from 'ngx-webstorage';

import * as moment from 'moment';
import { tileLayer, latLng,marker,icon } from 'leaflet';
import { Router } from '@angular/router';




declare var L;
moment.locale('es-us');    
declare var device;
declare var pedometer;
declare var BackgroundGeolocation;
declare var TTS;
declare var window;
declare var navigator;
declare var cordova

function reverse(s){
    return s.split("").reverse().join("");
}


function editDistance(s1, s2) {
    s1 = s1.toLowerCase();
    s2 = s2.toLowerCase();
  
    var costs = new Array();
    for (var i = 0; i <= s1.length; i++) {
      var lastValue = i;
      for (var j = 0; j <= s2.length; j++) {
        if (i == 0)
          costs[j] = j;
        else {
          if (j > 0) {
            var newValue = costs[j - 1];
            if (s1.charAt(i - 1) != s2.charAt(j - 1))
              newValue = Math.min(Math.min(newValue, lastValue),
                costs[j]) + 1;
            costs[j - 1] = lastValue;
            lastValue = newValue;
          }
        }
      }
      if (i > 0)
        costs[s2.length] = lastValue;
    }
    return costs[s2.length];
  }
 
   
@Injectable({ providedIn: 'root'})
export class AppService implements OnInit {

    private subjectLocation = new Subject<any>();
    private subjectSteps = new Subject<any>();
    private subjectAccel = new Subject<any>();
    private subjectAuth  = new Subject<any>();
    private subjetShareEntrenamiento = new Subject<any>();
    private subjectEntrenamiento=new Subject<any>();
    private subjetTitle =new Subject<any>();
    public entrenamiento:any;
    public Entrenamientos=[];
    public getAcceration:boolean=false;
    constructor(
      public localSt:LocalStorageService,
      private router : Router,
      private _ngZone: NgZone
    ){
        console.log('Se construye  AppService!');
      if(this.localSt.retrieve('entrenamientos')){
        this.Entrenamientos=this.getEntrenamientos();
      }
      else{
        this.localSt.store('entrenamientos',[]);
      }
        
      if(this.localSt.retrieve('entrenamiento'))      
        this.entrenamiento=this.localSt.retrieve('entrenamiento');
      else
      {
        this.entrenamiento={start:new Date(),stop:new Date(),started:false,paused:false,pasos:0,pasos_acumulados:0,distancia:"",velocidad_promedio:0,Locations:[]};
        this.localSt.store('entrenamiento',this.entrenamiento);
      }
    }
    ngOnInit(){
      console.log('Se Inicia  AppService!');     
    }
    OpenFile(fileName){
      function success() {
        console.log('Success');
      }
      
      function error(code) {
        if (code === 1) {
          console.log('No file handler found');
        } else {
          console.log('Undefined error');
        }
      }
      
      function progress(progressEvent) {
        if (progressEvent.lengthComputable) {
          var perc = Math.floor(progressEvent.loaded / progressEvent.total * 100);
          // update UI with status, for example:
          // statusDom.innerHTML = perc + "% loaded...";
        } else {
          // download does not offer a length... just show dots
          /*
             if(statusDom.innerHTML == "") {
             statusDom.innerHTML = "Loading";
             } else {
             statusDom.innerHTML += ".";
             }
           */
        }
      };
      cordova.plugins.disusered.shareFile(cordova.file.externalCacheDirectory +fileName, success, error, progress);
    }
    shareText(text){
      cordova.plugins.disusered.shareText(text, ()=>{},()=>{},()=>{});
    }

    getFileFromShare(){
      window.plugins.fileAssociation.addGetExternal(null,(data)=>{
        this._ngZone.run(()=>{
          this.router.navigate(['/calendar']);
          });
        var info=JSON.parse(data);
        info.externo=true;
        info.saved=false;
        this.sendShareEntrenamiento(info);
        //need call every time
        this.getFileFromShare();
      },(error)=>{
        console.log(error);
      });
    }
    GetExternalFile(){
     
      
      
      window.plugins.fileAssociation.getAssociatedData(null,
         (success)=> {
            try {
                if (success != null) {
                    //handle your data here maybe ex. by promise 
                    console.log(success);
                    var info=JSON.parse(success);
                    info.externo=true;
                    info.saved=false;
                    this.sendShareEntrenamiento(info);
                    //alert(success);
                    //this.GetExternalFile();
                    this._ngZone.run(()=>{
                      this.router.navigate(['/calendar']);
                      });

                    //navigator.app.exitApp();
                }
            } catch (e) {
                console.log(e);
            }
        }, function (error) {
            console.log(error);
        });
    }

    keepAwake(si){
      if(si)
        window.plugins.insomnia.keepAwake();
      else
      window.plugins.insomnia.allowSleepAgain()
    }
    watchAccelID;
    StartServiceMobile(){

      let config=this.localSt.retrieve('config');
      if(!config){
        config={'keepAwake':false,'darkMap':false,'textSpeech':false};
        this.localSt.store('config',config);
      }
      this.keepAwake(config.keepAwake);
        

      this.GetExternalFile();
            
      this.getFileFromShare();
      BackgroundGeolocation.configure({
        startOnBoot:false,
        locationProvider: BackgroundGeolocation.ACTIVITY_PROVIDER,
        desiredAccuracy: BackgroundGeolocation.HIGH_ACCURACY,
        stationaryRadius: 1,
        distanceFilter: 1,
        startForeground:false,
        notificationsEnabled:true,
        notificationTitle: 'Seguimiento en segundo plano',
        notificationText: '',
        debug: true,
        interval: 2000,
        fastestInterval: 3000,
        activitiesInterval: 5000,
        stopOnTerminate: false // enable this to clear background location settings when the app terminates
      });
      BackgroundGeolocation.on('background', () => {
        console.log('[INFO] App is in background');
      });
  
      BackgroundGeolocation.on('foreground', () => {
        console.log('[INFO] App is in foreground');
      });
  
      BackgroundGeolocation.on('location', (location)=> {
          console.log(location);
         
          //('Vel: '+(data.speed).toFixed(2)+'M/s Prom:'+(this.velocidad_promedio/index).toFixed(2)+'M/s Dist:'+(this.velocidad_promedio*3.6/1000).toFixed(2)+'Km')
          this.sendLocation(location);
          if(!this.entrenamiento.started){
            //Auto Stop 
            this.stopBackGroundGeoLocation();
            return;
          } 

          this.entrenamiento.Locations.push(location);
          let index=0;
          this.entrenamiento.velocidad_promedio=0;
          

          let kmTotales=0;
          let _velocidad_promedio=0;
          for(let x=0;x<this.entrenamiento.Locations.length;x++){
            let pos1=this.entrenamiento.Locations[x];
            if(pos1.speed)
              _velocidad_promedio+=pos1.speed;

            let pos2=this.entrenamiento.Locations[x+1];
            if((x+1)<this.entrenamiento.Locations.length){         
               kmTotales+=this.getDistanceFromLatLonInKm(pos1.latitude,pos1.longitude,pos2.latitude,pos2.longitude);
             }
           }

          
          
        //this.entrenamiento.distancia=(this.entrenamiento.velocidad_promedio*3.6/1000).toFixed(2)+'Km';
        this.entrenamiento.velocidad_promedio=_velocidad_promedio;
          this.entrenamiento.distancia=kmTotales.toFixed(2);
          
          this.localSt.store('entrenamiento',this.entrenamiento);
          this.sendEntrenamiento('newPosition');
          // handle your locations here
          // to perform long running operation on iOS
          // you need to create background task
         
        });
        BackgroundGeolocation.on('stationary', (stationaryLocation)=> {
          console.log("Stationary");
          console.log(stationaryLocation);
          // handle stationary locations here
        });
        BackgroundGeolocation.checkStatus((status)=> {
          console.log('[INFO] BackgroundGeolocation service is running', status.isRunning);
          console.log('[INFO] BackgroundGeolocation services enabled', status.locationServicesEnabled);
          console.log('[INFO] BackgroundGeolocation auth status: ' + status.authorization);
       
          // you don't need to check status before start (this is just the example)
          if (!status.isRunning) { 
            this.entrenamiento.paused=true;
            this.sendEntrenamiento('checkStatus');
           }

        });


        navigator.accelerometer.getCurrentAcceleration((data)=>{
          console.log(data);
        },()=>{
          console.log('errrorrr acee');
        });

        this.startAccel(1000);
      
      
//

}
  startAccel(frequency){
    var options = { frequency: frequency };  // Update every 3 seconds
      
    this.watchAccelID = navigator.accelerometer.watchAcceleration((acceleration)=>{
      this.sendAccel(acceleration);
      if(this.getAcceration) {
        this.AccelData.push(acceleration);      
      }
    }, this.onErrorAccel, options);
 }
 stopAccel(){
  navigator.accelerometer.clearWatch(this.watchAccelID);
 }

  AccelData=[];
  
    
    /* return;
    console.log('Acceleration X: ' + acceleration.x + '\n' +
          'Acceleration Y: ' + acceleration.y + '\n' +
          'Acceleration Z: ' + acceleration.z + '\n' +
          'Timestamp: '      + acceleration.timestamp + '\n'); */

  saveAccel(){
    this.localSt.store('accelometer',this.AccelData);
  }

    onErrorAccel() {
        console.log('onError!');
    }
   
    setEntrenamientoStart(){
      /* this.entrenamiento.started=true;
      this.entrenamiento.paused_time=0;
      this.entrenamiento.paused=false;
      this.entrenamiento.start=new Date().getTime();
      this.entrenamiento.stop=""; */
      this.startBackGroundGeoLocation().subscribe(result=>{
        console.log("startBackGroundGeoLocation",result);
        if(result){

          this.entrenamiento={paused_time:0,start:new Date().getTime(),stop:new Date().getTime(),started:true,paused:false,pasos:0,pasos_acumulados:0,distancia:"",velocidad_promedio:0,Locations:[]};
          this.sendEntrenamiento('start');
          this.localSt.store('entrenamiento',this.entrenamiento);
        }
      });
      
    }

    setEntrenamientoPause(){
      this.entrenamiento.started=true;
      this.entrenamiento.paused=!this.entrenamiento.paused;     
      if(!this.entrenamiento.paused)
      {
        this.startBackGroundGeoLocation().subscribe(result=>{});
       // this.getPasos();
      }
      else{
        this.entrenamiento.pasos_acumulados+=this.entrenamiento.pasos;
        this.entrenamiento.pasos=0;
        this.stopBackGroundGeoLocation();
      }
      this.sendEntrenamiento('pause');
      this.localSt.store('entrenamiento',this.entrenamiento);
    }

    setEntrenamientoStop(){
      if(!this.entrenamiento.started) return;
      this.entrenamiento.started=false;
      this.entrenamiento.stop=new Date().getTime();
      this.Entrenamientos=this.localSt.retrieve('entrenamientos');
      this.Entrenamientos.push(this.entrenamiento);
      this.localSt.store('entrenamientos',this.Entrenamientos);
      this.entrenamiento={start:new Date(),stop:new Date(),started:false,paused:false,pasos:0,pasos_acumulados:0,distancia:"",velocidad_promedio:0,Locations:[]};
      this.localSt.store('entrenamiento',this.entrenamiento);      
      this.stopBackGroundGeoLocation();
      this.sendEntrenamiento('stop');
      
    }



   
    
    startBackGroundGeoLocation() : Observable<any>{
      let subjectAuth  = new Subject<any>();
       BackgroundGeolocation.checkStatus((status)=> {
         console.log('[INFO] BackgroundGeolocation service is running', status.isRunning);
         console.log('[INFO] BackgroundGeolocation services enabled', status.locationServicesEnabled);
         console.log('[INFO] BackgroundGeolocation auth status: ' + status.authorization);
       if(!status.authorization){

         BackgroundGeolocation.start();
         BackgroundGeolocation.stop();
         this.checkAuth();
         return subjectAuth.next(false);
         
         
       }
       else{
         // you }don't need to check status before start (this is just the example)
         if (!status.isRunning ) {          
           BackgroundGeolocation.start(); //triggers start on start event
         }
         BackgroundGeolocation.startTask((taskKey)=> {
           console.log(taskKey);
           pedometer.startPedometerUpdates(this.successHandlerPedometer, this.onErrorPedometer);
           return subjectAuth.next(true);
         });
       }
       });      
       return subjectAuth.asObservable();
     }

     stopBackGroundGeoLocation(){
       BackgroundGeolocation.checkStatus((status)=> {
         console.log('[INFO] BackgroundGeolocation service is running', status.isRunning);
         console.log('[INFO] BackgroundGeolocation services enabled', status.locationServicesEnabled);
         console.log('[INFO] BackgroundGeolocation auth status: ' + status.authorization);
         
         // you don't need to check status before start (this is just the example)
         if (status.isRunning) {
           BackgroundGeolocation.stop(); //triggers start on start event
           pedometer.stopPedometerUpdates((success)=>{
             console.log("stop",success);
           }, (error)=>{
             console.log("stop",error);
           });
         }
       });
     }
     getEntrenamiento(propiedad?){
      if(propiedad)
        return this.entrenamiento[propiedad];   
     return this.entrenamiento;
  }
    getPasos(){
      //only for IPHONE
      var successHandler = function (pedometerData) {
        console.log("getPasos",pedometerData);
       
    };
    var options = {
        "startDate": this.entrenamiento.start,
        "endDate": new Date()
    };
    pedometer.queryData(successHandler, (onError)=>{console.log(onError)}, options);
    }


    isRecog(){

        let successCallback=(d)=>{
        console.log("sussess isRec");
        }
        let errorCallback=()=>{
            console.log("error");
        }
        window.plugins.speechRecognition.isRecognitionAvailable(
             successCallback,  errorCallback)
    }
    Parar(){
        window.plugins.speechRecognition.stopListening(
            (a)=>{console.log(a);}, ()=>{console.log("saff")})
    }
    Parser(frase:String){
      let palabras=frase.split(' ');
      let saluda=0;
      let a=0;
      let nombre="";
      let decir="";
      let quien=0;
      let es=0;
      
      palabras.forEach(palabra => {
        if(editDistance(palabra,'saluda')<2)
          saluda=1;
        if(editDistance(palabra,'a')<2)
         a=1;

         if(saluda==1 && a==1){
           nombre=palabra;
           
         }
         if(editDistance(palabra,'que')<2)
         quien=1;
       if(editDistance(palabra,'haces')<5)
        es=1;

        if(quien==1 && es==1){
          nombre=palabra;
          
        }
         

        
        console.log("posibles palabras:"+palabra);
      });
      
      if(saluda && a && nombre){
        this.textToSpeech("Buenas noches "+nombre+", que la disfrutes");
        return true;
      }
      if(quien && es && nombre){
        this.textToSpeech("Que onda "+nombre+"!,dejá eso!");
        return true;
      }


      return false;
    }
    Escuchar(){
        window.plugins.speechRecognition.requestPermission(
           ()=>{console.log("fdsf");},()=>{console.log("dsff");})
            ;
        let options = {
             language:"es-AR"            
          };
          
          let successCallback=(text)=>{
              
              console.log(text);
              let frase=""+text[0];
              let si=false;
              text.forEach((element:String) => {
                  if(editDistance('quién es perches',element)<2){
                      this.textToSpeech("Perches, es mi amigo");
                      si=true;
                      return;
                  }
                  else 
                  if(editDistance('quién es fede',element)<2){
                      this.textToSpeech("Fede, es mi amigo");
                      si=true;
                  }
                  else 
                  
                  if(editDistance('qué hora es',element)<2){
                      let time=new Date();
                      let h=time.getHours();
                      let m=time.getMinutes();
                      let son="son";
                      if(h==1) son = "es";
                      if(h==12 || h == 1 || h==2){
                        this.textToSpeech(son+" las "+h+" y "+ m+", es la hora de volver a sus casitas");
                      }
                      else{
                        
                        this.textToSpeech(son+" las "+h+" y "+ m);
                      }
                    
                      si=true;
                  }
                  else{
                    si=this.Parser(element);
                  }
                  
                  
              });
            if(!si)
              this.textToSpeech("Y al revés:"+reverse(""+text[0]))
              
           
          }
          window.plugins.speechRecognition.startListening(
             successCallback, ()=>{console.log('errorss')},  options)
    }
    sendSteps(message: any) {
        
    }
    sendAccel(message: any){
      this.subjectAccel.next({ data:message });
    }
    sendLocation(message: any) {
        this.subjectLocation.next({ info:message });
    }
    sendEntrenamiento(action) {
      this.subjectEntrenamiento.next({ info:this.entrenamiento, action:action });
  }
  sendShareEntrenamiento(entrenamiento) {
    setTimeout(() => {      
      this.subjetShareEntrenamiento.next({ info:entrenamiento});
    }, 100);
  }
  sendTitle(action) {
    setTimeout(() => {
      
      this.subjetTitle.next({ title:action });
    }, 1);
}
    clearMessages() {
        this.subjectLocation.next();    
    }

    onStepsChange(): Observable<any> {
        return this.subjectSteps.asObservable();
    }
    onAccelChange(): Observable<any> {
      return this.subjectAccel.asObservable();
  }
  
    onShareEntrenamientoChange(): Observable<any> {
      return this.subjetShareEntrenamiento.asObservable();
    }

    onTitleChange(): Observable<any> {
      return this.subjetTitle.asObservable();
  }
    onEntrenamientoChange(): Observable<any> {
      return this.subjectEntrenamiento.asObservable();
  }

    onLocationChange(): Observable<any> {
        return this.subjectLocation.asObservable();
    }

    getStatus(){
        return "ok";
    }
    verConfig(){
      BackgroundGeolocation.showAppSettings();
    }
    setTextBackGround(text){
      return;
      if(BackgroundGeolocation)
      BackgroundGeolocation.getConfig((a=>{
        a.notificationText=text;
        BackgroundGeolocation.configure(a);
      }));
      
    }

    successHandlerPedometer = (pedometerData)=> {
      // this.sendSteps(pedometerData);
       console.log(pedometerData);
       if(this.entrenamiento.started && !this.entrenamiento.paused)
         this.entrenamiento.pasos=pedometerData.numberOfSteps;              
      
   };
    onErrorPedometer=(e)=>{
       console.log(e);
     }
    
      timeCheck;
      checkAuth(){
        BackgroundGeolocation.on('authorization', function(status) {
          console.log('[INFO] BackgroundGeolocation authorization status: ' + status);
          if (status !== BackgroundGeolocation.AUTHORIZED) {
            // we need to set delay or otherwise alert may not be shown
            clearTimeout(this.timeCheck);
            this.timeCheck=setTimeout(function() {
              var showSettings = confirm('Mis Actividades requiere de Ubicación. Ir a configuración?');
              if (showSettings) {                
                return BackgroundGeolocation.showAppSettings();
              }
            }, 1000);
          }
        });
      }
      textToSpeech(text,rate=1){
        
        TTS
        .speak({
            text: text,
            locale: 'es-AR',
            rate: rate
        }).then(function (a) {
            console.log(a);
            console.log("se dijo"+text);
        }, function (reason) {
            console.log(reason);
        });
      }

      getEntrenamientos(location?,onlyInArea?:boolean){
        let tmp=this.localSt.retrieve('entrenamientos');
        let Entrenamientos=[];
        tmp.forEach(entrenamiento => {
        //  if(element.distancia)
  /*           Entrenamientos.push(element );
        });
       
       Entrenamientos.forEach(entrenamiento => { */
         let fecha=new Date(entrenamiento.start);
         entrenamiento.fecha=moment(fecha).format('LL');
         entrenamiento.fecha_corta=moment(fecha).format('MMM D');
         entrenamiento.pasos=entrenamiento.pasos+entrenamiento.pasos_acumulados;
         entrenamiento.inArea=false;
         entrenamiento.saved=true;
         let miliseg=entrenamiento.stop-entrenamiento.start-(entrenamiento.paused_time*1000);
         entrenamiento.tiempo= new Date(miliseg).toISOString().substr(11, 8);
         if(entrenamiento.Locations && entrenamiento.Locations.length && location){
           let LaPos=entrenamiento.Locations[0];
           let mts=this.getDistanceFromLatLonInKm(LaPos.latitude,LaPos.longitude,location.latitude,location.longitude)*1000;
           if(mts<80)
              entrenamiento.inArea=true;
         }

        let kmTotales=0;
        let i=0;
        let _velocidad_promedio=0;

    /*REMOVER LUEGO */
         for(let x=0;x<entrenamiento.Locations.length;x++){
           let pos1=entrenamiento.Locations[x];
           let pos2=entrenamiento.Locations[x+1];
           if(pos1.speed)
           _velocidad_promedio+=pos1.speed;
           //Medir Distancia 
           
           if((x+1)<entrenamiento.Locations.length){         
              kmTotales+=this.getDistanceFromLatLonInKm(pos1.latitude,pos1.longitude,pos2.latitude,pos2.longitude);
            }
          }
    /*REMOVER LUEGO */
              
         entrenamiento.velocidad_promedio=_velocidad_promedio;
         entrenamiento.distancia=kmTotales.toFixed(2);
         //entrenamiento.velocidad=entrenamiento.velocidad_promedio/3.6;
         entrenamiento.velocidad=(entrenamiento.velocidad_promedio/1000*3.6).toFixed(2)+' K/h';
         if(onlyInArea==true){
          if(entrenamiento.inArea==true){
            Entrenamientos.push(entrenamiento);
          }
         }
         else{
          Entrenamientos.push(entrenamiento);
         }
        
        
       });
       console.log(Entrenamientos);
       return Entrenamientos;
      }
      
      setBackgroundGeolocationTitle(title){
        BackgroundGeolocation.tiles
      }

      getDistanceFromLatLonInKm(lat1,lon1,lat2,lon2) {
        var R = 6371; // Radius of the earth in km
        var dLat = this.deg2rad(lat2-lat1);  // deg2rad below
        var dLon = this.deg2rad(lon2-lon1); 
        var a = 
          Math.sin(dLat/2) * Math.sin(dLat/2) +
          Math.cos(this.deg2rad(lat1)) * Math.cos(this.deg2rad(lat2)) * 
          Math.sin(dLon/2) * Math.sin(dLon/2)
          ; 
        var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)); 
        var d = R * c; // Distance in km
        return d;
      }
      
       deg2rad(deg) {
        return deg * (Math.PI/180)
      }
      writeFile(fileEntry, dataObj) {
        // Create a FileWriter object for our FileEntry (log.txt).
        fileEntry.createWriter( (fileWriter)=> {
    
            fileWriter.onwriteend = ()=> {
                console.log("Successful file write...");
                this.OpenFile(fileEntry.name);
                //this.readFile(fileEntry);
            };
    
            fileWriter.onerror = function (e) {
                console.log("Failed file write: " + e.toString());
            };
    
            // If data object is not passed in,
            // create a new Blob instead.
            if (!dataObj) {
                dataObj = new Blob(['some file data'], { type: 'text/plain' });
            }
    
            fileWriter.write(dataObj);
        });
    }
     createFile(dirEntry, fileName, isAppend,data) {
      // Creates a new file or returns the file if it already exists.
      dirEntry.getFile(fileName, {create: true, exclusive: false}, (fileEntry)=> {
  
          this.writeFile(fileEntry, data);
  
      }, (onErrorCreateFile)=>{});
  
  }
  setTempFile(file,data){
    window.requestFileSystem(window.TEMPORARY, 5 * 1024 * 1024,  (fs)=> {

      console.log('file system open: ' + fs.name);
      this.createFile(fs.root, file, false,data);
  
    }, (onErrorLoadFs)=>{});
  }
  readFile(fileEntry) {

      fileEntry.file( (file)=> {
          var reader = new FileReader();
  
          reader.onloadend = function() {
              console.log("Successful file read: " + this.result);
              
          };
  
          reader.readAsText(file);
  
      }, (onErrorReadFile)=>{});
  }

}
