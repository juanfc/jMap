import { AfterViewInit, ChangeDetectionStrategy, ChangeDetectorRef, Component, Inject, NgZone, OnDestroy, OnInit } from '@angular/core';
import { AppService } from '../app.service';
import * as moment from 'moment';
import { tileLayer, latLng,marker,icon } from 'leaflet';
import { MatDialog } from '@angular/material/dialog';
import {DialogConfirmComponent} from '../dialog-confirm/dialog-confirm.component'

declare var L;
moment.locale('es-us');    
@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss'],
  changeDetection:ChangeDetectionStrategy.Default
})
export class CalendarComponent implements OnInit,OnDestroy,AfterViewInit {
  Entrenamientos= [];
  entrenamientoLocations=[];
  loading:boolean=false;
  verMapa:boolean=false;
  loading_value="0%";
  map;
  SliderValue=0; 
  //url='https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png';
  url='http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
  private appService:AppService;
  constructor(
    @Inject(AppService) appService: AppService,
    public dialogo: MatDialog,
    private ngZone: NgZone,
    private _changeDetectorRef: ChangeDetectorRef
  ) {
    this.appService=appService;
    this.Entrenamientos=appService.Entrenamientos;
    this.appService.onShareEntrenamientoChange().subscribe(data=>{
      this._changeDetectorRef.detach();
      data.info.play=false;
      //let new_arr=[data.info];
     // this.Entrenamientos.forEach(element => {
    //    new_arr.push(element);
     // });
      /* Para actualizar el DOM reasigno el arr Entrenamientos */
     // this.Entrenamientos=new_arr;
      console.log(data);

      this.Entrenamientos.unshift(data.info);
      this._changeDetectorRef.detectChanges();
      this._changeDetectorRef.reattach();
    });
    
   }
   mostrarDialogo(): void {
   
  }
   SliderChanging=false;
   timeSlider;
   onTouched(e){
    console.log(e); 
   }
   inputSlider(e){
    console.log(e);
    this.SliderChanging=true;
    clearTimeout(this.timeSlider);
    this.timeSlider=setTimeout(() => {
      this.SliderChange(e);
      this.SliderChanging=false;
    }, 250);
   }
   ngAfterViewInit(){
     this.verMapa=true;
    document.getElementById("map_calendar").style.height=this.mapHeight+'px';
    document.getElementById("listContainer").style.height=(window.innerHeight-360)+'px';
    document.getElementById("calendarContent").style.height=(window.innerHeight-60)+'px'; 
     setTimeout(() => {
      this.drawMap();
     }, 200);
   }
   ngOnDestroy(){
    clearInterval(this.MapInterval);
    clearTimeout(this.timeSlider);
    if(this.Entrenamientos.length){
      if(this.Entrenamientos[this.IndexClick])
        this.Entrenamientos[this.IndexClick].play=false;

    }
   }
   SliderChange(e){
     if(this.entrenamientoLocations.length<=e.value){
      this.SliderChanging=false;
      return;
     }
    let temp=[];
    this.map.remove();
    this.drawMap();
    this.ghostMark="";
    this.arr=[];
    this.ghostMark="";
    clearInterval(this.MapInterval);
    this.MapInterval=""

    this.ghostTime=new Date(this.entrenamientoLocations[e.value].time);
    for(let x=0;x<e.value;x++){
      let location=this.entrenamientoLocations[x];
      let pos=[location.latitude,location.longitude];
      temp.push(pos);   
    }
    
    L.polyline(temp, {color: 'blue',weight: 4,opacity: 0.2}).addTo(this.map);
    this.ghostStartPos=e.value;
    this.startPaintGhost();
    this.SliderChanging=false;
     console.log(e);
   }
   hora
   value_ant=0;
   formatLabel=(value: number)=> {
     if(value!=this.value_ant && value<this.entrenamientoLocations.length){       
       this.hora=new Date(this.entrenamientoLocations[value].time).toTimeString().substr(0,8);
       
      }
      else{
        this.hora=new Date(this.entrenamientoLocations[this.entrenamientoLocations.length-1].time).toTimeString().substr(0,5);
      }
      return this.hora;
      

    
  }

  mapHeight=300;
  listContainerHeight=200;
  ngOnInit(): void {
    //let e=this.appService.localSt.retrieve('entrenamientos');
    //this.entrenamientoLocations=e[0].Locations;
    this.appService.onLoadingChange().subscribe((res)=>{
      this.loading_value=res.value;
      this._changeDetectorRef.detectChanges();
      console.log(res);
      
    });
   /*  this.appService.getEntrenamientos().subscribe((data)=>{
      console.log("getEntrenamientos",data);
      data.forEach(element => {        
        this.Entrenamientos.push(element);
      });  
    }); */
    
   //this.drawMap();
   //this.mapHeight=window.innerHeight-600;
   
   this.appService.sendTitle("Histórico");
  

   this.appService.onEntrenamientoChange().subscribe(data=>{
    console.log(data);
    switch(data.action){
      case 'stop':
        this.appService.getEntrenamientos().subscribe((data)=>{
          this.Entrenamientos=data;
        });
      break;
    }
  });
  }
  guardar(entrenamiento){
    entrenamiento.saved=true;
    
    let arr=[];
    this.IndexClick=0;
    for(let x=0;x<this.Entrenamientos.length;x++)
      if(this.Entrenamientos[x].saved){
        arr.push(this.Entrenamientos[x]);    
      }
      
    this.Entrenamientos=arr;
    this.loading=true;
    this._changeDetectorRef.detach();
    this.appService.dbInsertEntrenamiento(entrenamiento).subscribe((id_entrenamiento)=>{
      entrenamiento.id_entrenamiento=id_entrenamiento;
      this.loading=false;
      this._changeDetectorRef.detectChanges();
      this._changeDetectorRef.reattach();
      
    });    
    
    //this.appService.localSt.store('entrenamientos',this.Entrenamientos);
  }
  delete(start,id_entrenamiento,index){
    this.dialogo
    .open(DialogConfirmComponent, {
      data: '¿Quieres eliminar el entrenamiento?'
    })
    .afterClosed()
    .subscribe((confirmado: Boolean) => {
      if (confirmado) {
        
       let arr=this.appService.deleteEntrenamiento(start,id_entrenamiento,this.IndexClick);
       this.Entrenamientos=arr; 
       //Si el entrenamiento que se borra es el mismo que el seleccionado: Limpiar locations.
       if(this.IndexClick==index){
        this.entrenamientoLocations=[];
        this.updateSize();
       }
       this.IndexClick=0;

      }
    });
    

  }
  IndexClick=0;
  updateSize(){
    let bar=0;
    if(this.entrenamientoLocations.length) bar=60;
    document.getElementById("listContainer").style.height=(window.innerHeight-360-bar)+'px';
  }

  view(entrenamiento,index){
    if(this.IndexClick!=index){
      this.Entrenamientos[this.IndexClick].play=false;
    }
    this.IndexClick=index;
    entrenamiento.play=true;
    
    this.ghostStartPos=0;
    
    this.arr=[];
    this.ghostMark="";
    clearInterval(this.MapInterval);
    this.MapInterval=""
    if(entrenamiento.saved){
      this.loading=true;
      this.appService.dbGetEntrenamientosLocations(entrenamiento.id_entrenamiento).subscribe((Locations)=>{
        this.entrenamientoLocations=Locations;
        this.updateSize();
        this.loading=false;
        
        
        setTimeout(() => {
          if(this.map)
          this.map.remove();
          this.drawMap();
          this.startPaintGhost();
          setTimeout(() => {
            document.getElementsByTagName('mat-drawer-content')[0].scrollTo(0, 0)
            document.getElementById('calendarContent').scrollTo(0, 0)
            
          }, 100);
        }, 100);
        
      });
      this._changeDetectorRef.markForCheck();
    }
    else{
      this.entrenamientoLocations = entrenamiento.Locations;
      this.updateSize();
      if(this.map){
        this.map.remove();
      }
          this.drawMap();
          this.startPaintGhost();
          
    }
  }
  shareEntrenamiento(entrenamiento,gpx){
    let user=this.appService.localSt.retrieve('usuario');
    let nombre ="Usuario"
    if(user){
      nombre=user.nombre;
      entrenamiento.user=user.nombre;
    }
    let str="";
    this.appService.dbGetEntrenamiento(entrenamiento.id_entrenamiento).subscribe((ent)=>{
      entrenamiento=ent;
      if(gpx){
        let data=this.appService.generateGpxFile(entrenamiento);
        console.log(data);
        this.appService.setTempFile(nombre+"-"+entrenamiento.fecha+".gpx", data);
      }
      else{
  
        this.appService.setTempFile(nombre+"-"+entrenamiento.fecha+".json", JSON.stringify(entrenamiento));
      }    
    });

    


    //this.appService.writeFile('JuanEntrenamiento.json', JSON.stringify(entrenamiento))
  }

  stopPaintGhost(entrenamiento){
    entrenamiento.play=false;    
    clearInterval(this.MapInterval);
    this.MapInterval="";
   
  }
  
  mark
  last;
  ghostMark;
  ghostTime=new Date();
  ghostStartPos=0;
  ghostTimeStr="";
  MapInterval
  arr=[];
  ghostSpeed=8;
  endTime="";
  startTime=""
  startPaintGhost(){
    if(!this.entrenamientoLocations.length) return;

    this.ghostTime=new Date(this.entrenamientoLocations[this.ghostStartPos].time);  
    this.startTime=new Date(this.entrenamientoLocations[0].time).toTimeString().substr(0,8);
    this.endTime=new Date(this.entrenamientoLocations[this.entrenamientoLocations.length-1].time).toTimeString().substr(0,8);
    this.ngZone.run(()=>{
    this.MapInterval= setInterval(()=>{
    this.ghostTime.setMilliseconds(this.ghostTime.getMilliseconds()+20*this.ghostSpeed);    



    if(this.ghostStartPos <this.entrenamientoLocations.length-1){
      let location=this.entrenamientoLocations[this.ghostStartPos];
      let location_next;
      if(this.ghostStartPos+1<this.entrenamientoLocations.length-1)
        location_next=this.entrenamientoLocations[this.ghostStartPos+1];

      let posTime=new Date(this.entrenamientoLocations[this.ghostStartPos].time);
      this.ghostTimeStr=this.ghostTime.toTimeString().substr(0,8);
      //console.log(this.ghostTimeStr);
      if(this.ghostTime>=posTime)
      {      
        if(!this.ghostMark){

          this.ghostMark=L.marker([location.latitude,location.longitude],{        
            title:'sadasdasd',
            icon: icon({
              iconSize: [ 25, 41 ],
              iconAnchor: [ 13, 41 ],
              iconUrl: 'assets/marker-icon.png',
              // shadowUrl: 'assets/marker-shadow.png'
            }),
          }).addTo(this.map);
          
          //this.ghostMark.setRotationAngle(180);
          
        }
        else{
          
          let pos=[location.latitude,location.longitude];
          this.ghostMark.setLatLng(pos);
          
          let obj=  document.getElementById("agujasRep")
          if(obj){
            obj.style.transform = "rotate("+location.bearing+"deg)";
          }
          this.ghostMark.bindTooltip('⌚'+this.ghostTimeStr+' ⚙'+(location.speed*3.6).toFixed(2)+'Km/h').openTooltip()
          //this.ghostMark.setRotationAngle(180);
          //this.ghostMark.setZoom(7)
          this.map.panTo(this.ghostMark.getLatLng(),{maxZoom:10});
         // L.circle(pos, {radius: 1500,color:(pos[0]*10).toFixed(0)}).addTo(this.map);
         //console.log(location.altitude);
         if(location_next) {
           //let dist=this.appService.getDistanceFromLatLonInKm(location.latitude,location.longitude,location_next.latitude,location_next.longitude);           
           //let inter=(location_next.time-location.time)/1000;
        //   console.log("distancia:"+(dist*1000).toFixed(2)+ "   Segu:"+inter);
          }
          //this.SliderValue=this.index;
          this.ghostStartPos++;
          if(!this.SliderChanging)
            this.SliderValue=this.ghostStartPos;
          
        
          this.arr.push(this.ghostMark.getLatLng());
          if(this.arr.length==2){
            let polyline=L.polyline(this.arr, {color: 'blue',weight: 4,opacity: 0.2}).addTo(this.map);
            this.arr=[this.arr[1]];
          }
        }
      }
    }
    else{
      this.Entrenamientos[this.IndexClick].play=false;
    }
       
    },20);
    });
  }
  layer;
  drawMap(){
    this.map = new L.map('map_calendar');
    // create the tile layer with correct attribution
   var osmUrl='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
   var osmAttrib='Map data © <a href="https://openstreetmap.org">OpenStreetMap</a> contributors';
   let config=this.appService.localSt.retrieve('config');
   if(config.darkMap){
      document.getElementById('map_calendar').style.filter="invert(1) sepia(13%) saturate(37%) hue-rotate(130deg) brightness(95%) contrast(80%)"
   }
   else{
    document.getElementById('map_calendar').style.filter="invert(0)"
   }
   var osm = new L.TileLayer(this.url, {minZoom: 0, maxZoom: 20, attribution: osmAttrib}); 
  
   this.map.setView( new L.LatLng(-31.388246158367238, -64.48196783165659),15);
   this.layer=this.map.addLayer(osm);
  
  }
}
