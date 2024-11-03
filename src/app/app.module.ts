import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PatientTransportingNotificationComponent } from './components/patient-transporting-notification/patient-transporting-notification.component';

@NgModule({
  declarations: [
    AppComponent,
    PatientTransportingNotificationComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }