import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginGroverComponent } from './components/login-grover/login-grover.component';
import { AmbulanceTrackingComponent } from './components/ambulance-tracking/ambulance-tracking.component';

@NgModule({
  declarations: [AppComponent, AmbulanceTrackingComponent, LoginGroverComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
