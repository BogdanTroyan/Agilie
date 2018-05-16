import {Routes} from '@angular/router';
import {ShotsComponent} from './shots/shots.component';
import {ShotComponent} from './shot/shot.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {FullPreviewComponent} from './full-preview/full-preview.component';


export const ROUTES: Routes = [
	{path: '', component: DashboardComponent},
  	{path: 'shots', component: ShotsComponent, children: [
      {path: ':shotId', component: ShotComponent, children: [
      	{path: 'full-preview', component: FullPreviewComponent}
      ]}
    ]}
];