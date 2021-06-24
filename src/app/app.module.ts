import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatMenuModule} from '@angular/material/menu';
import {AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatCardModule} from '@angular/material/card';
import {MatListModule} from '@angular/material/list';
import {MatDividerModule} from '@angular/material/divider';
import { EntrenamientosModule } from './entrenamientos/entrenamientos.module';
import { NgxWebstorageModule } from 'ngx-webstorage';
import {DialogConfirmComponent} from './dialog-confirm/dialog-confirm.component'
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { DialogConfirmModule } from './dialog-confirm/dialog-confirm.module';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    NgxWebstorageModule.forRoot(),
    MatDividerModule,
    MatListModule,
    MatCardModule,
    MatSidenavModule,
    MatToolbarModule,
    MatMenuModule,
    MatButtonModule,
    BrowserModule,
    DialogConfirmModule,
    EntrenamientosModule,
    MatIconModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [MatDialogModule],
  bootstrap: [AppComponent],
  entryComponents: [DialogConfirmComponent]
})
export class AppModule { }
