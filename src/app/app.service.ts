
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
    private subjectLoading = new Subject<any>();
    private subjectAccel = new Subject<any>();
    private subjectAuth  = new Subject<any>();
    private subjectMessage =new Subject<any>();
    private subjetShareEntrenamiento = new Subject<any>();
    private subjectEntrenamiento=new Subject<any>();
    private subjetTitle =new Subject<any>();
    public entrenamiento:any;
    public Entrenamientos=[];
    public getAcceration:boolean=false;
    modelEntrenamiento={user:'',start:new Date().getTime(),stop:new Date().getTime(),started:false,paused:false,pasos:0,pasos_acumulados:0,distancia:"",velocidad:'',velocidad_promedio:0,Locations:[]};
    constructor(
      public localSt:LocalStorageService,
      private router : Router,
      private _ngZone: NgZone
    ){
      
        console.log('Se construye  AppService!');

        this.usuario=this.localSt.retrieve('usuario');
        if(!this.usuario){
          this.usuario={nombre:'Sin definir'};
        }
        this.modelEntrenamiento= {user:this.usuario.nombre,start:new Date().getTime(),stop:new Date().getTime(),started:false,paused:false,pasos:0,pasos_acumulados:0,distancia:"",velocidad_promedio:0,velocidad:'',Locations:[]};
      if(this.localSt.retrieve('entrenamiento'))      
        this.entrenamiento=this.localSt.retrieve('entrenamiento');
      else
      {
        this.entrenamiento=this.modelEntrenamiento;
        this.localSt.store('entrenamiento',this.entrenamiento);
      }

    }
    DB;
    usuario;
    ngOnInit(){
     //not init :$      
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
    configBackgroundGeolocation(){
      let gps_config=this.localSt.retrieve('gps_config');
      BackgroundGeolocation.configure({
        startOnBoot:false,
        locationProvider: gps_config.locationProvider,
        desiredAccuracy: BackgroundGeolocation.HIGH_ACCURACY,
        stationaryRadius: gps_config.stationaryRadius,
        distanceFilter: gps_config.distanceFilter,
        startForeground:false,
        notificationsEnabled:true,
        notificationTitle: 'Seguimiento en segundo plano',
        notificationText: '',
        debug: gps_config.debug,
        interval: gps_config.interval,
        fastestInterval: gps_config.fastestInterval,
        activitiesInterval: gps_config.activitiesInterval,
        stopOnTerminate: false // enable this to clear background location settings when the app terminates
      });
    }
    //
    getSensor(){
      window.sensors.enableSensor("LIGHT"); 
      setInterval(() => {
        //window.sensors.getState((a)=>{console.log(a)}, (a)=>{console.log(a)});
      },1000);
    }

    StartServiceMobile(){
      this.openDB().subscribe((res)=>{
        this.generateTables().subscribe((t)=>{
          this.getEntrenamientos().subscribe((data)=>{
            this.Entrenamientos=data;
            this.afterStartServiceMobile();
          });

        });
     
     
      });
    }
    afterStartServiceMobile(){
      this.getSensor();
      let config=this.localSt.retrieve('config');
      if(!config){
        config={'keepAwake':false,'darkMap':false,'textSpeech':false};
        this.localSt.store('config',config);
      }
      this.keepAwake(config.keepAwake);
        

      this.GetExternalFile();
            
      this.getFileFromShare();
      let gps_config=this.localSt.retrieve('gps_config');
      
      if(!gps_config){
        gps_config={
          'debug':false,
          'stationaryRadius':2,
          'distanceFilter':2,
          'forceStationaryUpdate':false,
          'interval':5000,
          'fastestInterval':3000,
          'activitiesInterval':5000,
          'locationProvider':1};
          this.localSt.store('gps_config',gps_config);
      }
      
      this.configBackgroundGeolocation();

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
          let gps_config=this.localSt.retrieve('gps_config');
          if(gps_config.forceStationaryUpdate){
            if(this.entrenamiento.started){
              this.stopBackGroundGeoLocation().subscribe((res)=>{
                setTimeout(() => {
                  this.startBackGroundGeoLocation().subscribe((result)=>{
                    console.log(result);
                  });
                }, 2000);
                
              });
            }
          }
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
      this.startBackGroundGeoLocation().subscribe(result=>{
        console.log("startBackGroundGeoLocation",result);
        if(result){
          
          this.entrenamiento={user:this.usuario.nombre,paused_time:0, start:new Date().getTime(),stop:new Date().getTime(),started:true,paused:false,pasos:0,pasos_acumulados:0,distancia:"",velocidad:'',velocidad_promedio:0,Locations:[]};      
          //this.entrenamiento=this.modelEntrenamiento;
          this.entrenamiento.started=true;
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
    deleteEntrenamiento(start,id_entrenamiento,IndexClick){
      let arr=[];
      this.Entrenamientos[IndexClick].play=false;
      IndexClick=0;        
      for(let x=0;x<this.Entrenamientos.length;x++){
        if(id_entrenamiento){
          if(this.Entrenamientos[x].id_entrenamiento!=id_entrenamiento){            
            arr.push(this.Entrenamientos[x]);    
          }
          else{
            this.dbDeleteEntrenamiento(this.Entrenamientos[x].id_entrenamiento);
          }
        }
        else{

          if(this.Entrenamientos[x].start!=start){            
            arr.push(this.Entrenamientos[x]);    
          }
          else{
            if(this.Entrenamientos[x].id_entrenamiento)
            this.dbDeleteEntrenamiento(this.Entrenamientos[x].id_entrenamiento);
          }
        }

      }
      this.Entrenamientos=arr;   
      return  this.Entrenamientos;
      //this.appService.localSt.store('entrenamientos',this.Entrenamientos);
      
    }
    showInfo(){
      let inner= `
      <div class="MiDivCenter"> 
      <mat-icon _ngcontent-sbh-c158="" role="img" class="mat-icon notranslate material-icons mat-icon-no-color" aria-hidden="true" data-mat-icon-type="font">favorite</mat-icon>
      <h2>HGOLA NONO</h2>
      </div>
      `;

      //document.getElementById('divInfo').innerHTML=inner;
    }
    generateGpxFile(entrenamiento){
      let trkpt="";

      let head="<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n"+
      "<gpx\n"+
      "version=\"1.1\"\n"+
      "creator=\"Tus Actividades - https://play.google.com/store/apps/details?id=com.actualsoft.jmap\"\n"+
      "xmlns:xsi=\"http://www.w3.org/2001/XMLSchema-instance\"\n"+
      "xmlns=\"http://www.topografix.com/GPX/1/1\"\n"+
      "xsi:schemaLocation=\"http://www.topografix.com/GPX/1/1 http://www.topografix.com/GPX/1/1/gpx.xsd\"\n"+
      "xmlns:gpxtpx=\"http://www.garmin.com/xmlschemas/TrackPointExtension/v1\">\n"+
      "<metadata>\n"+
      "<link href=\"https://play.google.com/store/apps/details?id=com.actualsoft.jmap\">\n"+
      "<text>Mis Actividades</text>\n"+
      "</link>\n"+
      "<time>"+new Date(entrenamiento.start).toISOString()+"</time>\n"+
      "</metadata>\n"+
      "<trk>\n"+
      "<name>Entrenamiento de"+ entrenamiento.user+"</name>\n"+
      "<trkseg>\n";
      let _close="</trkseg>\n"+
      "</trk>\n"+
      "</gpx>\n";
      
      
      entrenamiento.Locations.forEach((point)=>{
        

        trkpt+="<trkpt lat=\""+point.latitude+"\" lon=\""+point.longitude+"\">\n"+
        "<ele>"+parseFloat(point.altitude).toFixed(2)+"</ele>\n"+
        "<speed>"+parseFloat(point.speed).toFixed(2)+"</speed>\n"+
        "<time>"+new Date(point.time).toISOString()+"</time>\n"+
        "</trkpt>\n";
        //"<course>"+parseFloat(point.bearing).toFixed(2)+"</course>\n"+

      });

      return head+trkpt+_close;
    }
    setEntrenamientoStop(): Observable<any>{
      let subjectData  = new Subject<any>();
      if(!this.entrenamiento.started){
        setTimeout(() => {          
          return subjectData.next(true);
        }, 1);
       // return subjectData.next(true);
      }
      else{

        this.entrenamiento.started=false;
        this.entrenamiento.stop=new Date().getTime();
        //this.Entrenamientos=this.localSt.retrieve('entrenamientos');
        
        
        this.localSt.store('entrenamiento',this.entrenamiento);      
        this.stopBackGroundGeoLocation();
        this.sendEntrenamiento('stop');
        this.dbInsertEntrenamiento().subscribe((id_entrenamiento)=>{
          this.getEntrenamientos().subscribe((data)=>{
            this.Entrenamientos=data;
            this.entrenamiento=this.modelEntrenamiento;
            return subjectData.next(true);
          });
        });
        //this.localSt.store('entrenamientos',this.Entrenamientos);
      } 
      return subjectData.asObservable();
    }

    openDB() : Observable<any>{
      let subjectData  = new Subject<any>();
      window.sqlitePlugin.openDatabase({ name: 'misactividades.db', location: 'default' },  (db) =>{
        this.DB=db;
        return subjectData.next(true);
        
      });
      return subjectData.asObservable();
    }
    generateTables(): Observable<any>{
      let subjectData  = new Subject<any>();
      const sql = `
      CREATE TABLE IF NOT EXISTS entrenamientos (
          id_entrenamiento INTEGER PRIMARY KEY AUTOINCREMENT,
          distancia INTEGER DEFAULT 0,
          pasos INTEGER  DEFAULT 0,
          externo INTEGER  DEFAULT 0,
          pasos_acumulados INTEGER  DEFAULT 0,
          start INTEGER DEFAULT '',
          stop INTEGER DEFAULT '',          
          user text DEFAULT '',
          velocidad_promedio INTEGER DEFAULT 0,
          paused_time INTEGER DEFAULT 0,
          start_latitude REAL  DEFAULT 0,
          start_longitude REAL  DEFAULT 0,
          end_latitude REAL  DEFAULT 0,
          end_longitude REAL  DEFAULT 0
    
      );`;
    
      const sql2=`CREATE TABLE IF NOT EXISTS entrenamientos_locations (
              id_entrenamiento INTEGER DEFAULT 0,
              accuracy INTEGER DEFAULT 0,
              altitude REAL  DEFAULT 0,
              latitude REAL  DEFAULT 0,
              longitude REAL  DEFAULT 0,
              speed REAL  DEFAULT 0,
              bearing REAL  DEFAULT 0,    
              time INTEGER DEFAULT ''
          );
      `;
      this.DB.transaction((tx)=> {
        tx.executeSql(sql);
        tx.executeSql(sql2);
        
      },(error)=>{
        console.log(error);
      },(success)=>{
        console.log(success);
        return subjectData.next(true);
      });
      
      return subjectData.asObservable();
    }
    dbDeleteEntrenamiento(id_entrenamiento){
      console.log("dbDeleteEntrenamiento()",id_entrenamiento);
      this.DB.executeSql("delete from entrenamientos WHERE id_entrenamiento=?",[id_entrenamiento]);
      this.DB.executeSql("delete from entrenamientos_locations WHERE id_entrenamiento=?",[id_entrenamiento]);
    }
    dbGetEntrenamientos() : Observable<any>{
      let subjectData  = new Subject<any>();
      let arr=[];
      this.DB.executeSql("select * from entrenamientos",[],(rs)=>{
        
        for(let x=0;x<rs.rows.length;x++)
        {
         arr.push(rs.rows.item(x));
        }
        return subjectData.next(arr);
      },(a)=>{console.log(a)});
      return subjectData.asObservable();
    }

    dbGetEntrenamiento(id_entrenamiento) : Observable<any>{
      let subjectData  = new Subject<any>();
      let arr=[];
      this.DB.executeSql("select * from entrenamientos WHERE id_entrenamiento=?",[id_entrenamiento],(rs)=>{
        
        for(let x=0;x<rs.rows.length;x++)
        {
         arr.push(rs.rows.item(x));
        }
        let Entrenamiento_arr=this.generateEntrenamientos(arr);
        this.dbGetEntrenamientosLocations(id_entrenamiento).subscribe((Loc)=>{
          Entrenamiento_arr[0].Locations=Loc;
          return subjectData.next(Entrenamiento_arr[0]);
        });

      },(a)=>{console.log(a)});
      return subjectData.asObservable();
    }

    dbGetEntrenamientosLocations(id_entrenamiento) : Observable<any>{
      let subjectData  = new Subject<any>();
      let arr=[];
      this.DB.executeSql("select * from entrenamientos_locations WHERE id_entrenamiento=?",[id_entrenamiento],(rs)=>{
        
        for(let x=0;x<rs.rows.length;x++)
        {
         arr.push(rs.rows.item(x));
        }
        return subjectData.next(arr);
      },(a)=>{console.log(a)});
      return subjectData.asObservable();
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

     stopBackGroundGeoLocation():Observable<any>{
      let subjectAuth  = new Subject<any>();

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
          return subjectAuth.next(true);
       });
       return subjectAuth.asObservable();
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
    sendMessage(data: any){
      this.subjectMessage.next(data);
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
    sendLoading(value: any) {
      this.subjectLoading.next({ value });
  }
    onStepsChange(): Observable<any> {
        return this.subjectSteps.asObservable();
    }
    onLoadingChange(): Observable<any> {
      return this.subjectLoading.asObservable();
  }
    onMessageChange(): Observable<any> {
      return this.subjectMessage.asObservable();
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
    showMessage(text,timeout=2000){
      this.sendMessage({text:text,timeout:timeout});
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
      dbInsertEntrenamiento(entrenamiento?): Observable<any>{
        let subjectData  = new Subject<any>();
      let e;
      if(entrenamiento)
        e=entrenamiento;
      else
         e=this.entrenamiento;

      let  arr=[];
      let s_lat=0;
      let s_lng=0;
      let e_lat=0;
      let e_lng=0;
      if(e.Locations && e.Locations.length){
        s_lat = e.Locations[0].latitude;
        s_lng = e.Locations[0].longitude;

        e_lat = e.Locations[e.Locations.length-1].latitude;
        e_lng = e.Locations[e.Locations.length-1].longitude;
      }
      let seg=(e.stop-e.start-(e.paused_time*1000))/1000;
      if(seg>10)
      {
        this.DB.executeSql('INSERT INTO entrenamientos (distancia,pasos,pasos_acumulados,start,stop,user,externo,velocidad_promedio,paused_time,start_latitude,start_longitude,end_latitude,end_longitude) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?)',
        [ e.distancia,
          e.pasos,
          e.pasos_acumulados,
          e.start,
          e.stop,          
          e.user,
          e.externo,
          e.velocidad_promedio,
          e.paused_time,
          s_lat,
          s_lng,
          e_lat,
          e_lng
        ],(res)=>{
        console.log("insert ent",res);    
          let id_entrenamiento=res.insertId;
          let total =e.Locations.length;
          let index=0;
          if(total==0){
            return subjectData.next(id_entrenamiento);
          }
          else
          {
            e.Locations.forEach(l=> {              
              
              this.DB.executeSql('INSERT into entrenamientos_locations values (?,?,?,?,?,?,?,?)',
              [id_entrenamiento, l.accuracy, l.altitude, l.latitude, l.longitude, l.speed, l.bearing, l.time],(res2)=>{
                  console.log(res2);
                  index++;
                  if(index==total){
                    return subjectData.next(id_entrenamiento);
                  }
                  this.sendLoading(parseInt(((index/total) *100).toFixed(0)));

              });
            });  
          }
        });
      }
      else{
        setTimeout(() => {
          return subjectData.next(0);
        }, 1);
      }
        return subjectData.asObservable();
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
      generateEntrenamientos(tmp,location?,onlyInArea?:boolean){
        let Entrenamientos=[];
        tmp.forEach(entrenamiento => {
          //  if(element.distancia)
          /*           Entrenamientos.push(element );
        });
        
        Entrenamientos.forEach(entrenamiento => { */
          try{            
            let fecha=new Date(entrenamiento.start);
            entrenamiento.fecha=moment(fecha).format('LL');
            entrenamiento.fecha_corta=moment(fecha).format('MMM D');
            entrenamiento.pasos=entrenamiento.pasos+entrenamiento.pasos_acumulados;
            entrenamiento.inArea=false;
            entrenamiento.saved=true;
            let miliseg=entrenamiento.stop-entrenamiento.start-(entrenamiento.paused_time*1000);
            entrenamiento.tiempo= new Date(miliseg).toISOString().substr(11, 8);
            if(location && entrenamiento.start_latitude && entrenamiento.start_longitude){
             
              let mts=this.getDistanceFromLatLonInKm(entrenamiento.start_latitude,entrenamiento.start_longitude,location.latitude,location.longitude)*1000;
              if(mts<80)
                entrenamiento.inArea=true;
            }
        
            entrenamiento.velocidad=(entrenamiento.velocidad_promedio/1000*3.6).toFixed(2)+' K/h';
            if(onlyInArea==true){
              if(entrenamiento.inArea==true){
                Entrenamientos.push(entrenamiento);
              }
            }
            else{
              Entrenamientos.push(entrenamiento);
            }
        }
        catch(e) {
          console.log(e);
          console.log(entrenamiento);
        }
        });
        return Entrenamientos;
      }

      getEntrenamientos(location?,onlyInArea?:boolean): Observable<any>{
        let subjectData  = new Subject<any>();
        //let tmp=this.localSt.retrieve('entrenamientos');
        this.dbGetEntrenamientos().subscribe((tmp)=>{
            let Entrenamientos=this.generateEntrenamientos(tmp,location,onlyInArea);

            console.log(Entrenamientos);
            return subjectData.next(Entrenamientos);

          });
          return subjectData.asObservable();

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
