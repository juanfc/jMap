import { Component, Inject, OnInit } from '@angular/core';
import { AppService } from '../app.service';

@Component({
  selector: 'app-setting',
  templateUrl: './setting.component.html',
  styleUrls: ['./setting.component.scss']
})
export class SettingComponent implements OnInit {
  nombre="Tu nombre";
  public appService:AppService;
  constructor(
    @Inject(AppService) appService: AppService)
    {
      this.appService=appService;
    }

  ngOnInit(): void {
    let user=this.appService.localSt.retrieve('usuario');
    if(user){
      this.nombre=user.nombre;
    }
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
  }
  checkAuth(){
    this.appService.verConfig()
    this.appService.checkAuth();
  }
}
