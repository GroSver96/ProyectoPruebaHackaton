import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
<<<<<<< HEAD
import { PacieteComponent } from './component/paciete/paciete.component';
=======
import { NurseRegistrationComponent } from './components/nurse-registration/nurse-registration.component';
>>>>>>> 7f60bf15de4c6815f1e54eab79b49574767b213e

@NgModule({
  declarations: [
    AppComponent,
<<<<<<< HEAD
    PacieteComponent
=======
    NurseRegistrationComponent
>>>>>>> 7f60bf15de4c6815f1e54eab79b49574767b213e
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }