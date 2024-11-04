import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DoctorRegistroComponent } from './component/doctor-registro/doctor-registro.component';

@NgModule({
  declarations: [
    AppComponent,
<<<<<<< HEAD
    DoctorRegistroComponent
=======
>>>>>>> 666c251614861e9f0431ae46f17eb5c074d8ef50
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }