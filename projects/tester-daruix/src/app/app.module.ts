import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LibDaruixModule } from 'projects/lib-daruix/src/public-api';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LibDaruixModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
