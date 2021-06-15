import { Component, Inject, OnInit } from '@angular/core';
import { AppService } from '../app.service';

@Component({
  selector: 'app-setting',
  templateUrl: './setting.component.html',
  styleUrls: ['./setting.component.scss']
})
export class SettingComponent implements OnInit {
  
  public appService:AppService;
  constructor(
    @Inject(AppService) appService: AppService)
    {
      this.appService=appService;
    }

  ngOnInit(): void {
    console.log('inicio setting');
    this.appService.sendTitle("Configuración");
    document.getElementById("settingContent").style.height=(window.innerHeight-60)+'px'; 
  }
  checkAuth(){
    this.appService.verConfig()
    this.appService.checkAuth();
  }
}
