import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalendarModule } from './calendar/calendar.module';
import { InicioModule } from './inicio/inicio.module';


const routes: Routes = [];

@NgModule({
  imports: [
    CalendarModule,
    InicioModule,
    RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
