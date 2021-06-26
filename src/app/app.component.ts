import { AfterViewInit, Component, Inject, NgZone, OnDestroy, OnInit } from '@angular/core';
import { AppService } from './app.service';
import { LocalStorageService } from 'ngx-webstorage';
import { ActivatedRoute,  Router } from '@angular/router';
import {MatSnackBar} from '@angular/material/snack-bar';

declare var window;
declare var device;
declare var navigator;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers:[MatSnackBar]
})
export class AppComponent implements OnInit,OnDestroy,AfterViewInit {
  title = 'jMaps';
  pageTitle="Inicio";
  mensaje="";
  public appService:AppService;
  constructor(
    @Inject(AppService) appService: AppService,
    public localSt:LocalStorageService,
    private _snackBar: MatSnackBar,
    private router : Router,
    private _ngZone: NgZone,
    private route: ActivatedRoute
  ){
    this.appService=appService;
  }
  ngAfterViewInit(){
    this.appService.onTitleChange().subscribe(obj=>{
      this.pageTitle=obj.title;
    })
    let entre=this.localSt.retrieve('entrenamiento')
       if(entre.started)
          this.router.navigate(['/entrenamientos']);
      
        
        this.router.navigate(['/inicio']);
  }
  ngOnDestroy(){
    console.log('Destroy app component');
  }
  List=[];
  timeExit;
  openSnackBar(message: string, action: string) {
  
  }
  ngOnInit(){
    //for Test
    this.openSnackBar("hola","hola") ;
    this.appService.onMessageChange().subscribe(data=>{
      console.log("onmessaje",data);
        this.mensaje=data.text;
          
          setTimeout(() => {
            this.mensaje="";
          }, data.timeout);
    });
    
    //window.plugins.insomnia.allowSleepAgain()
    
    let parent=this;
    document.addEventListener("deviceready", ()=> {

      
      document.addEventListener("backbutton", (onBackKeyDown)=>{
        console.log(onBackKeyDown);
        console.log(parent);
        this._ngZone.run(()=>{

          if(this.mensaje) this.exit();
          this.mensaje="Repita para cerrar!";
          
          setTimeout(() => {
            this.mensaje="";
          }, 2000);
          
        });
        switch(parent.router['location'].path()){
          case '/calendar':
          break;

        }
      }, false);
       
      
      
      
      
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
      console.log(parent);
      console.log("appStart");
       
      
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
    window.open("https://play.google.com/store/apps/details?id=com.actualsoft.jmap",'_new');  
  }
  share(){
    this.appService.shareText("https://play.google.com/store/apps/details?id=com.actualsoft.jmap");
  }
  exit(){
    this.appService.setEntrenamientoStop();
    navigator.app.exitApp();
  }
  ayuda(){
    
  }

}
