import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalendarModule } from './calendar/calendar.module';
import { InicioModule } from './inicio/inicio.module';
import { MonitorModule } from './monitor/monitor.module';
import { SettingModule } from './setting/setting.module';


const routes: Routes = [];

@NgModule({
  imports: [
    CalendarModule,
    InicioModule,
    SettingModule,
    MonitorModule,
    RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
