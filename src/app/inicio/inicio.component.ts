import { AfterViewInit, ChangeDetectionStrategy, ChangeDetectorRef, Component, Inject, OnInit } from '@angular/core';
import { AppService } from '../app.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss'],
  changeDetection:ChangeDetectionStrategy.Default
})
export class InicioComponent implements OnInit,AfterViewInit {
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
    console.log('inicio oninit');
    this.appService.sendTitle("Inicio");
    //document.getElementById("inicioContent").style.height=(window.innerHeight-60)+'px'; 
  }
  ngAfterViewInit(): void {
    
    
      
      document.getElementById("inicioContent").style.height=(window.innerHeight-60)+'px'; 
      this._changeDetectorRef.detectChanges();
    
    //console.log('inicio oninit');
    //this.appService.sendTitle("Inicio");
  }

}
