import { Component, Inject, OnDestroy, OnInit } from '@angular/core';
import { AppService } from '../app.service';
import * as moment from 'moment';
import { tileLayer, latLng,marker,icon } from 'leaflet';


declare var L;
moment.locale('es-us');    
@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss']
})
export class CalendarComponent implements OnInit,OnDestroy {
  Entrenamientos= [];
  entrenamientoLocations;
  map;
  SliderValue=0; 
  //url='https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png';
  url='http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
  private appService:AppService;
  constructor(
    @Inject(AppService) appService: AppService,
  ) {
    this.appService=appService;
    
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
   ngOnDestroy(){
    clearInterval(this.MapInterval);
    clearTimeout(this.timeSlider);
    if(this.Entrenamientos.length)
      this.Entrenamientos[this.IndexClick].play=false;
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
  getEntrenamientos(){
    let tmp=this.appService.localSt.retrieve('entrenamientos');
    tmp.forEach(element => {
    //  if(element.distancia)
        this.Entrenamientos.push(element );
    });
   console.log(this.Entrenamientos);
   this.Entrenamientos.forEach(entrenamiento => {
     let fecha=new Date(entrenamiento.start);
     entrenamiento.fecha=moment(fecha).format('LL');
     entrenamiento.pasos=entrenamiento.pasos+entrenamiento.pasos_acumulados;
     let miliseg=entrenamiento.stop-entrenamiento.start-(entrenamiento.paused_time*1000);
     entrenamiento.tiempo= new Date(miliseg).toISOString().substr(11, 8);
    let kmTotales=0;
    let i=0;
/*REMOVER LUEGO */
     for(let x=0;x<entrenamiento.Locations.length;x++){
       let pos1=entrenamiento.Locations[x];
       let pos2=entrenamiento.Locations[x+1];
       if((x+1)<entrenamiento.Locations.length){         
          kmTotales+=this.appService.getDistanceFromLatLonInKm(pos1.latitude,pos1.longitude,pos2.latitude,pos2.longitude);
        }
      }
/*REMOVER LUEGO */
      
         
        
   

    console.log(kmTotales+'KM');

     entrenamiento.distancia=kmTotales.toFixed(2)+'Km';
     //entrenamiento.velocidad=entrenamiento.velocidad_promedio/3.6;
     entrenamiento.velocidad=(entrenamiento.velocidad_promedio/1000*3.6).toFixed(2)+' K/h';
    
   });
  }
  ngOnInit(): void {
    this.Entrenamientos=this.appService.getEntrenamientos();
   this.drawMap();
   this.appService.onEntrenamientoChange().subscribe(data=>{
    console.log(data);
    switch(data.action){
      case 'stop':
        this.Entrenamientos=this.appService.getEntrenamientos()
      break;
    }
  });
  }
  delete(start){
    let arr=[];
    this.IndexClick=0;
    for(let x=0;x<this.Entrenamientos.length;x++)
      if(this.Entrenamientos[x].start!=start){
        arr.push(this.Entrenamientos[x]);    
      }
    this.Entrenamientos=arr;    
    this.appService.localSt.store('entrenamientos',this.Entrenamientos);
  }
  IndexClick=0;
  view(entrenamiento,index){
    if(this.IndexClick!=index){
      this.Entrenamientos[this.IndexClick].play=false;
    }
    this.IndexClick=index;
    entrenamiento.play=true;
    this.entrenamientoLocations=entrenamiento.Locations;
    this.ghostStartPos=0;
    
    this.arr=[];
    this.ghostMark="";
    clearInterval(this.MapInterval);
    this.MapInterval=""
    
    setTimeout(() => {
      if(this.map)
      
      this.map.remove();
      this.drawMap();
      this.startPaintGhost();
      setTimeout(() => {
        document.getElementsByTagName('mat-drawer-content')[0].scrollTo(0, 0)
      }, 100);
    }, 100);
  }
  stopPaintGhost(entrenamiento){
    entrenamiento.play=false;    
    clearInterval(this.MapInterval);
    this.MapInterval=""
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
         if(location_next) {
           let dist=this.appService.getDistanceFromLatLonInKm(location.latitude,location.longitude,location_next.latitude,location_next.longitude);           
           let inter=(location_next.time-location.time)/1000;
           console.log("distancia:"+(dist*1000).toFixed(2)+ "   Segu:"+inter);
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
  }
  layer;
  drawMap(){
    this.map = new L.map('map_calendar');
    // create the tile layer with correct attribution
   var osmUrl='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
   var osmAttrib='Map data © <a href="https://openstreetmap.org">OpenStreetMap</a> contributors';
   var osm = new L.TileLayer(this.url, {minZoom: 0, maxZoom: 20, attribution: osmAttrib}); 
  
   this.map.setView( new L.LatLng(-31.388246158367238, -64.48196783165659),15);
   this.layer=this.map.addLayer(osm);
  
  }
}
