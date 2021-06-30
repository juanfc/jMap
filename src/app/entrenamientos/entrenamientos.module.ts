import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EntrenamientosComponent } from './entrenamientos.component';
import { RouterModule, Routes } from '@angular/router';
import { Route } from '@angular/router';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';
import {  MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { HttpClientModule } from '@angular/common/http';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
const thisRoute: Route[] = [
  {
    
      path     : 'entrenamientos',
      component: EntrenamientosComponent
  }
];


@NgModule({
  declarations: [
    EntrenamientosComponent
  ],
  imports: [
    HttpClientModule,
    CommonModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatMenuModule,  
    MatListModule,
    LeafletModule,
    MatProgressSpinnerModule,
    RouterModule.forChild(thisRoute)
  ]
})
export class EntrenamientosModule { }
