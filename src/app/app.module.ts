import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
<<<<<<< HEAD
import { LoginGroverComponent } from './components/login-grover/login-grover.component';
import { AmbulanceTrackingComponent } from './components/ambulance-tracking/ambulance-tracking.component';
import { PatientTransportingNotificationComponent } from './components/patient-transporting-notification/patient-transporting-notification.component';

@NgModule({
  declarations: [AppComponent, AmbulanceTrackingComponent, LoginGroverComponent, PatientTransportingNotificationComponent],
  imports: [BrowserModule, AppRoutingModule],
=======
import { PacientRegistrationComponent } from './components/pacient-registration/pacient-registration.component';
import { LoginComponent } from './components/login/login.component';
import { RegistrarComponent } from './components/registrar/registrar.component';


@NgModule({
  declarations: [
    AppComponent,
    PacientRegistrationComponent,
    LoginComponent,
    RegistrarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
>>>>>>> joel_roque
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}