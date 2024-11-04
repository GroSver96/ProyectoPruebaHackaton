import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
<<<<<<< HEAD
import { LoginGroverComponent } from './components/login-grover/login-grover.component';
import { AmbulanceTrackingComponent } from './components/ambulance-tracking/ambulance-tracking.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginGroverComponent,
    AmbulanceTrackingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
=======

@NgModule({
  declarations: [AppComponent, AmbulanceTrackingComponent],
  imports: [BrowserModule, AppRoutingModule],
>>>>>>> 4b163cf71457fc929ea6524957ce8774c5f62f06
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
