import { Component, OnInit, Output, EventEmitter, Injectable} from '@angular/core';
import { AppComponent } from '../app.component';
import { Input} from '@angular/core';
import { ShotService} from '../shot.service';

@Component({
  selector: 'app-shots',
  templateUrl: './shots.component.html',
  styleUrls: ['./shots.component.css']
})


export class ShotsComponent implements OnInit {
  

	shots: any;

  mouseOver(event, id) {
    event.target.src = this.shots[id].avatar;
  }

  mouseLeave(event, id) {
    event.target.src = this.shots[id].thumbnail;
  }

	scrollH: any = document.documentElement.scrollHeight;

  scrollT: any = document.documentElement.scrollTop;
  	constructor(private shotService: ShotService) {
  	}

  	ngOnInit() {
     this.shotService.getShots().subscribe(res => {
       this.shots = res;
     });
  	}

}
