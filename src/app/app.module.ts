import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { ROUTES } from './routes.rb';


import { AppComponent } from './app.component';
import { ShotsComponent } from './shots/shots.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ShotComponent } from './shot/shot.component';
import { ShotService } from './shot.service';
import { FullPreviewComponent } from './full-preview/full-preview.component';





@NgModule({
  declarations: [
    AppComponent,
    ShotsComponent,
    DashboardComponent,
    ShotComponent,
    FullPreviewComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(ROUTES),
    FormsModule,
    HttpClientModule,
    
  ],
  bootstrap: [AppComponent],
  providers: [ShotService]
})
export class AppModule { }
