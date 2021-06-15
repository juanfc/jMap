import { Component, Inject, OnInit } from '@angular/core';
import { AppService } from '../app.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss']
})
export class InicioComponent implements OnInit {

  public appService:AppService;
  constructor(
    @Inject(AppService) appService: AppService)
    {
      this.appService=appService;
    }

  ngOnInit(): void {
    console.log('inicio oninit');
    this.appService.sendTitle("Inicio");
    document.getElementById("inicioContent").style.height=(window.innerHeight-60)+'px'; 
  }

}
