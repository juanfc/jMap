import { Component, Inject, OnDestroy, OnInit } from '@angular/core';
import { AppService } from '../app.service';
import { tileLayer, latLng,marker,icon } from 'leaflet';
import 'leaflet-rotatedmarker';
import { HttpClient } from '@angular/common/http';
import * as moment from 'moment';
declare var L;
@Component({
  selector: 'app-entrenamientos',
  templateUrl: './entrenamientos.component.html',
  styleUrls: ['./entrenamientos.component.scss'],
  providers:[HttpClient]
})
export class EntrenamientosComponent implements OnInit, OnDestroy {
  showLayer:boolean=true;
  seguirLimites:boolean=true;
  private appService:AppService;
  TimeCurrentLocation;
  tiempoEntrenamiento="00:00:00"
  Locations=[]
  EntrenamientosHistory=[]
  ghostLocations=[];
  y=0.01;
  x=0.02;
 map
 arr=[];
  MapInterval
  constructor(
    @Inject(AppService) appService: AppService,
    private http:HttpClient
    
  ){
    this.appService=appService;
    
  }

  //url='https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png';
  url='http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
  options = {
    layers: [
      tileLayer(this.url, { maxZoom: 16, attribution: '...' }),
      marker([ -31.389366, -64.494915 ],{
        icon: icon({
          iconSize: [ 25, 41 ],
          iconAnchor: [ 13, 41 ],
          iconUrl: 'assets/marker-icon.png',
          shadowUrl: 'assets/marker-shadow.png'
      })}),

    ],
    zoom: 15,
    center: latLng(-31.388246158367238, -64.48196783165659)
  };
  entrenamiento
  TimerEntrenamiento
  distanciaEntrenamiento="0.0 Km";
  pasosEntrenamiento="0 pasos";
  velocidadEntrenamiento="Velocidad:0 M/s";
  mapHeight=300;
  ngOnDestroy(){
    clearInterval(this.TimerEntrenamiento);
    clearInterval(this.TimeCurrentLocation);
  }
  startEntrenamiento(){
    this.mark="";
    this.map.remove();
    this.drawMap();
    this.Locations=[];
    this.appService.setEntrenamientoStart();    
    if(this.ghostLocations)
      this.startPaintGhost();
    
  }
  ghostInfo="";
  clearGhost(){
    this.ghostLocations=[];
    this.ghostInfo="";
  }
  setGhost(entrenamiento){
    this.ghostLocations=entrenamiento.Locations;
    this.ghostInfo=entrenamiento.fecha_corta+' Distancia:'+entrenamiento.distancia;
  }

  stopEntrenamiento(){
    this.appService.setEntrenamientoStop();    
    
  }

  pauseEntrenamiento(){
    this.appService.setEntrenamientoPause();    
    
  }
 layer;
 currentLocation;
 lastPosition;
 getCurrentLocation(){
  navigator.geolocation.getCurrentPosition((p)=>{
    this.currentLocation=p.coords;
    if(!this.lastPosition) 
      this.lastPosition={latitude:0,longitude:0};
    let mts=this.appService.getDistanceFromLatLonInKm(this.lastPosition.latitude,this.lastPosition.longitude,this.currentLocation.latitude,this.currentLocation.longitude)*1000;
    if(mts>50)
      this.EntrenamientosHistory= this.appService.getEntrenamientos(this.currentLocation);
    
      this.lastPosition=p.coords;
    console.log(p)
  });
 }
 drawMap(){
  this.map = new L.map('map');
  // create the tile layer with correct attribution
 var osmUrl='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
 var osmAttrib='Map data © <a href="https://openstreetmap.org">OpenStreetMap</a> contributors';
 var osm = new L.TileLayer(this.url, {minZoom: 0, maxZoom: 20, attribution: osmAttrib}); 

 this.map.setView( new L.LatLng(-31.388246158367238, -64.48196783165659),15);
 this.layer=this.map.addLayer(osm);

}

  ngOnInit(): void {
    this.mapHeight=window.innerHeight-200;
    document.getElementById("map").style.height=this.mapHeight+'px';
    this.entrenamiento=this.appService.getEntrenamiento();

    this.Locations =this.appService.getEntrenamiento('Locations');
    

      
    this.TimerEntrenamiento=setInterval(()=>{
      this.entrenamiento=this.appService.getEntrenamiento();
      if(this.entrenamiento.started){
        if(this.entrenamiento.paused)
          this.entrenamiento.paused_time++;
        
        let miliseg=(((new Date()).getTime() - new Date(this.entrenamiento.start).getTime()))-this.entrenamiento.paused_time*1000;
        this.distanciaEntrenamiento=this.entrenamiento.distancia;
        this.tiempoEntrenamiento=new Date(miliseg).toISOString().substr(11, 8);
        if(this.entrenamiento.paused){

          this.pasosEntrenamiento= this.entrenamiento.pasos_acumulados+" pasos";
        }
        else{
          this.appService.setTextBackGround('🕑 '+this.tiempoEntrenamiento+'  🚣🏾 '+this.distanciaEntrenamiento);
          this.pasosEntrenamiento= (this.entrenamiento.pasos_acumulados+this.entrenamiento.pasos)+" pasos";        
        }


        
        
       
        
      }
    },1000);
      


    this.drawMap();
    this.dibuja();
   
    this.appService.onEntrenamientoChange().subscribe(data=>{
      console.log(data);
      switch(data.action){
        case 'stop':
        break;
      }
      this.entrenamiento=data.info;
    });

    this.appService.onLocationChange().subscribe(data=>{
      console.log("Location:",data);
      this.Locations.push(data.info);
      if(data.info.speed)
        this.velocidadEntrenamiento=(data.info.speed).toFixed(2)+' M/s';

      this.dibuja();
    });
    this.appService.onStepsChange().subscribe(data=>{
      console.log("Steps:",data);
    });
setTimeout(() => {  
  this.getCurrentLocation(); //llama a Service GetEntrenamientos Si la posición cambia
}, 1000);
    
    this.TimeCurrentLocation=setInterval(() => {
      this.getCurrentLocation();
    }, 1000*60);

  }
  stopPaintGhost(){
    //this.index=0;
    clearInterval(this.MapInterval);
    this.MapInterval=""
  }
  index=0;
  mark
  last;
  ghostMark;
  ghostTime=new Date();
  ghostStartPos=0;
  ghostTimeStr="";
  
  startPaintGhost(){
    clearInterval(this.MapInterval);
    this.map.remove();
    this.arr=[];
    this.drawMap();
    this.ghostMark="";
    this.ghostStartPos=0;
    this.index=0;
    this.ghostTime=new Date(this.ghostLocations[this.ghostStartPos].time);
    this.MapInterval= setInterval(()=>{
    this.ghostTime.setMilliseconds(this.ghostTime.getMilliseconds()+1000);    

    if(this.index <this.ghostLocations.length-1){
      let location=this.ghostLocations[this.index];
      let posTime=new Date(this.ghostLocations[this.index].time);
      this.ghostTimeStr=this.ghostTime.toTimeString().substr(0,8);
      console.log(this.ghostTimeStr);
      if(this.ghostTime>=posTime)
      {      
        if(!this.ghostMark){

          this.ghostMark=L.marker([location.latitude,location.longitude],{        
            title:'sadasdasd',
            icon: icon({
              iconSize: [ 25, 41 ],
              iconAnchor: [ 13, 41 ],
              iconUrl: 'assets/marker-icon-ghost.png',
              // shadowUrl: 'assets/marker-shadow.png'
            }),
          }).addTo(this.map);
          
          //this.ghostMark.setRotationAngle(180);
          
        }
        else{
          
          let pos=[location.latitude,location.longitude];
          this.ghostMark.setLatLng(pos);
          //this.ghostMark.setRotationAngle(180);
          
          //this.ghostMark.setZoom(7)
         // this.map.panTo(this.ghostMark.getLatLng(),{maxZoom:10});
         // L.circle(pos, {radius: 1500,color:(pos[0]*10).toFixed(0)}).addTo(this.map);
          this.index++;
          this.ghostStartPos=this.index;
          if(this.index==100){                        
            let distanse =this.ghostMark.getLatLng().distanceTo(L.latLng(-31.388246158367238, -64.4819678316565));
            let km=(distanse/1000).toFixed(0);
            this.appService.textToSpeech("Distancia, "+km+" kilómetros");
          }
          
        
          this.arr.push(this.ghostMark.getLatLng());
          if(this.arr.length==2){
            let polyline=L.polyline(this.arr, {color: 'blue',weight: 4,opacity: 0.2}).addTo(this.map);
            this.arr=[this.arr[1]];
          }
        }
      }
    }
       
    },1000);
  }
  
  dibuja(location?){
    if(this.Locations.length){
      let mark=this.Locations[this.Locations.length-1];
      if(!this.mark){

        this.mark =L.marker([mark.latitude,mark.longitude ],{        
          
          icon: icon({
            iconSize: [ 25, 41 ],
            iconAnchor: [ 13, 41 ],
            iconUrl: 'assets/marker-icon.png',
            // shadowUrl: 'assets/marker-shadow.png'
          }),
        }).addTo(this.map);
      }
    
      else{
        this.mark.setLatLng([mark.latitude,mark.longitude]);
        //this.mark.setRotationAngle(180*((Math.sin(this.x*this.x)+(this.y*this.y))+Math.cos((this.x*this.x)+(this.y*this.y))));
        //this.map.setZoom(20)
        if(this.seguirLimites)
          this.map.panTo(this.mark.getLatLng(),{maxZoom:6});

    }
  }
    let arr=[];

    this.Locations.forEach(location=> {
      arr.push([location.latitude,location.longitude])
    });
    L.polyline(arr, {color: 'red',weight: 2,opacity: 0.5}).addTo(this.map);
  }

}
