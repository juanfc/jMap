import { AfterViewInit, ChangeDetectionStrategy, ChangeDetectorRef, Component, Inject, OnInit } from '@angular/core';
import { AppService } from '../app.service';
declare var Chart;

@Component({
  selector: 'app-monitor',
  templateUrl: './monitor.component.html',
  styleUrls: ['./monitor.component.scss'],
  changeDetection:ChangeDetectionStrategy.Default
})
export class MonitorComponent implements OnInit,AfterViewInit {
  iniciostart:boolean=false;
  public appService:AppService;
  constructor(
    @Inject(AppService) appService: AppService,
    private _changeDetectorRef: ChangeDetectorRef
    )
    {
      this.appService=appService;
    }

  ngOnInit(): void {
    console.log('monitor oninit');
    this.appService.sendTitle("Monitor");
    //document.getElementById("inicioContent").style.height=(window.innerHeight-60)+'px'; 
  }
  getMin(arr:[]){
    let min=10;
    arr.forEach(element => {
      if(element<min){
        min=element
      }
    });
    return min;
  }
  getMax(arr:[]){
    let max=0.0;
    arr.forEach(element => {
      if(element>max){
        max=element
      }
    });
    return max;
  }
  getProm(arr:[]){
    let prom=0;
    let index=0;
    arr.forEach(element => {
      
        prom=+element;
        index++;
      
    });
    return prom/index;
  }
  leer(){
    //v_i-1 < v_i --> if v_i+1 < v_i 
    for(let x=0;x<this.dataX.length;x++){
      
    }

  }
  ngAfterViewInit(): void {
    
    
      
      document.getElementById("monitorContent").style.height=(window.innerHeight-60)+'px'; 
      this.draw();
      this._changeDetectorRef.detectChanges();
      this.appService.onAccelChange().subscribe(info=>{
        //console.log(data);
        if(this.removing) return;
        this.xValues.push(info.data.timestamp);
        this.dataX.push(info.data.x);
        this.dataY.push(info.data.y);
        this.dataZ.push(info.data.z);
        if(this.chart)
        this.chart.update();
      });
  

    
    //console.log('inicio oninit');
    //this.appService.sendTitle("Inicio");
  }
  xValues=[];
  dataX=[];
  dataY=[];
  dataZ=[];
  chart;
  draw(){
    
    var ctx = document.getElementById('myChart');
    this.chart=  new Chart(ctx, {
        type: "line",
        indexAxis: 'y',
        data: {
          labels: this.xValues,
          datasets: [ { 
            data: this.dataX,
            borderColor: "green",
            fill: false
          }, { 
            data: this.dataY,
            borderColor: "blue",
            fill: false
          }]
        },
        options: {
          legend: {display: false}
        }
      });
  }
  update(){
    
    this.appService.Entrenamientos[0].Locations.forEach(point => {
      let alt=parseInt(point.altitude);
      this.dataX.push(alt)
      let d=new Date(point.time).toLocaleTimeString();
      
      this.xValues.push(d);
   }); 
    this.chart.update();
  }
  removing=false;

   removeData() {
    this.removing=true;
    //this.xValues=[];
    this.dataX=[];
    this.dataY=[];
    this.dataZ=[];
    this.chart.data.labels.pop();
    this.chart.data.datasets.forEach((dataset) => {
        dataset.data.pop();
    });
    this.chart.update();
    this.removing=false;
}
a(){
  var a=0;
  setInterval(()=>{
    a=a+0.05;
    console.log((-Math.sin(a)+0.5));
    if(a==1)a=0;
    document.body.style.filter="blur("+(-Math.sin(a)+0.5)+"px)";
  },50);
}

}
