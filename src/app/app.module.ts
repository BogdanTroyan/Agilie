import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { DigitalWatchComponent } from './digital-watch/digital-watch.component';
import { AnalogWatchComponent } from './analog-watch/analog-watch.component';

@NgModule({
  declarations: [
    AppComponent,
    DigitalWatchComponent,
    AnalogWatchComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
