import { AfterViewInit, Component, Inject, OnDestroy, OnInit } from '@angular/core';
import { AppService } from './app.service';
import { LocalStorageService } from 'ngx-webstorage';
import { ActivatedRoute,  Router } from '@angular/router';
declare var window;
declare var device;
declare var navigator;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit,OnDestroy,AfterViewInit {
  title = 'jMaps';
  pageTitle="Inicio";
  public appService:AppService;
  constructor(
    @Inject(AppService) appService: AppService,
    public localSt:LocalStorageService,
    private router : Router,
    private route: ActivatedRoute
  ){
    this.appService=appService;
  }
  ngAfterViewInit(){
    this.appService.onTitleChange().subscribe(obj=>{
      this.pageTitle=obj.title;
    })
  }
  ngOnDestroy(){
    console.log('Destroy app component');
  }
  List=[];
  ngOnInit(){
    //for Test
  
    
    //window.plugins.insomnia.allowSleepAgain()
    console.log("appStart");
     let entre=this.localSt.retrieve('entrenamiento')
     if(entre.started)
        this.router.navigate(['/entrenamientos']);

    let parent=this;
    document.addEventListener("deviceready", ()=> {
      console.log(parent);
      
      document.addEventListener("backbutton", (onBackKeyDown)=>{
        console.log(onBackKeyDown);
        console.log(parent);
        switch(parent.router['location'].path()){
          case '/calendar':
          break;
        }
      }, false);
       
      
      
      window.plugins.insomnia.keepAwake();
      window.addEventListener("deviceorientationabsolute", (event)=> {

        //console.log(event);
        let obj=  document.getElementById("agujas")
        if(obj){
          obj.style.transform = "rotate("+event.alpha+"deg)";
        }
        // process event.alpha, event.beta and event.gamma
    }, true);


      console.log(device);
      console.log(navigator.compass);
      this.appService.StartServiceMobile();
      
      this.appService.checkAuth();
      this.router.navigate(['/inicio']);
       //if(this.localSt.retrieve('started'))
  }, false);
  }

  checkAuth(){
    this.appService.verConfig()
    this.appService.checkAuth();
  }
  stop(){
    this.router.navigate(['/entrenamientos']);
    this.appService.setEntrenamientoStop();            
  }
  start(){
    this.router.navigate(['/entrenamientos']);  
    this.appService.setEntrenamientoStart();  
  }
  pause(){
    this.appService.setEntrenamientoPause();  
  }

  testDecir(que){
    this.appService.textToSpeech(que);
  }
  escuchar(){
    alert("Funcion desactivada.");
    //this.appService.Escuchar();
  } 
  parar(){
    this.appService.Parar();
  } 
  open(){
    this.appService.OpenFile();
  }
  exit(){
    this.appService.setEntrenamientoStop();
    navigator.app.exitApp();
  }

}
