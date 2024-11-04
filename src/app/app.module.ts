import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginGroverComponent } from './components/login-grover/login-grover.component';
import { AmbulanceTrackingComponent } from './components/ambulance-tracking/ambulance-tracking.component';
import { PatientTransportingNotificationComponent } from './components/patient-transporting-notification/patient-transporting-notification.component';

@NgModule({
  declarations: [AppComponent, AmbulanceTrackingComponent, LoginGroverComponent, PatientTransportingNotificationComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
