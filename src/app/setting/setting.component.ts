import { AfterViewInit, Component, Inject, OnInit } from '@angular/core';
import { AppService } from '../app.service';

@Component({
  selector: 'app-setting',
  templateUrl: './setting.component.html',
  styleUrls: ['./setting.component.scss']
})
export class SettingComponent implements OnInit,AfterViewInit {
  nombre="Tu nombre";
  gps_config;
  config;
  public appService:AppService;
  constructor(
    @Inject(AppService) appService: AppService)
    {
      this.appService=appService;
    }
ngAfterViewInit(){
  document.getElementById("settingGeneral").style.height=(window.innerHeight-110)+'px'; 
}
  ngOnInit(): void {
    let user=this.appService.localSt.retrieve('usuario');
    if(user){
      this.nombre=user.nombre;
    }
    this.config =this.appService.localSt.retrieve('config');
    this.gps_config=this.appService.localSt.retrieve('gps_config');
    
    console.log('inicio setting');
    this.appService.sendTitle("Configuración");
    document.getElementById("settingContent").style.height=(window.innerHeight-60)+'px'; 
    
  }
  save(){
    let user=this.appService.localSt.retrieve('usuario');
    if(user){
      user.nombre=this.nombre;
    }
    else{
      user = {nombre:this.nombre}
    }
    this.appService.localSt.store('usuario',user);
    this.appService.localSt.store('config',this.config);
    this.appService.showMessage("Se guardaron los datos!");
    this.appService.keepAwake(this.config.keepAwake);
  }
  saveGps(){
    this.appService.localSt.store('gps_config',this.gps_config);    
    this.appService.showMessage("Se guardaron los datos!");
    this.appService.configBackgroundGeolocation();
  }
  checkAuth(){
    this.appService.verConfig()
    this.appService.checkAuth();
  }
  selectedTabChange(e){
    switch(e.index){
      case 0:
        document.getElementById("settingGeneral").style.height=(window.innerHeight-110)+'px'; 
      break;
      case 1:
        document.getElementById("settingGps").style.height=(window.innerHeight-110)+'px'; 
      break;
    }
  }
  goUrl(){
    window.open('https://github.com/mauron85/react-native-background-geolocation/blob/master/PROVIDERS.md','_new')
  }
}
