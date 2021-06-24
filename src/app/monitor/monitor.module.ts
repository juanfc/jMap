import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MonitorComponent } from './monitor.component';
import { RouterModule, Routes } from '@angular/router';
import { Route } from '@angular/router';
import {  MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { HttpClientModule } from '@angular/common/http';
import { MatCardModule } from '@angular/material/card';
import {MatSliderModule} from '@angular/material/slider';
import { FormsModule } from '@angular/forms';

const thisRoute: Route[] = [
  {
    
      path     : 'monitor',
      component: MonitorComponent
  }
];



@NgModule({
  declarations: [
    MonitorComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    MatMenuModule,        
    MatIconModule,
    MatSliderModule,
    MatButtonModule,
    MatCardModule,
    MatMenuModule,     
    RouterModule.forChild(thisRoute)
  ]
})
export class MonitorModule { }
