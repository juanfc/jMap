import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SettingComponent } from './setting.component';
import { RouterModule, Routes } from '@angular/router';
import { Route } from '@angular/router';
import {  MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { HttpClientModule } from '@angular/common/http';
import { MatCardModule } from '@angular/material/card';
import {MatSliderModule} from '@angular/material/slider';
import { FormsModule } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatTabsModule} from '@angular/material/tabs';
import {MatRadioModule} from '@angular/material/radio';

import {MatSlideToggleModule} from '@angular/material/slide-toggle';
const thisRoute: Route[] = [
  {
    
      path     : 'config',
      component: SettingComponent,
      data:{title:'Configuración'}
  }
];



@NgModule({
  declarations: [
    SettingComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    MatInputModule,
    MatTabsModule,
    MatRadioModule,
    MatSlideToggleModule,
    MatMenuModule,        
    MatIconModule,
    MatSliderModule,
    MatButtonModule,
    MatCardModule,
    MatMenuModule,     
    RouterModule.forChild(thisRoute)
  ]
})
export class SettingModule { }
