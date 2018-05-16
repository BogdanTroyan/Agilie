import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ShotService} from '../shot.service';

@Component({
  selector: 'app-shot',
  templateUrl: './shot.component.html',
  styleUrls: ['./shot.component.css']
})
export class ShotComponent implements OnInit {

	shotId: any;	
	shot: any;

  	constructor(private route: ActivatedRoute, private shotService: ShotService) { }

	ngOnInit() {
	  	this.route.params.subscribe (res => {
	      	this.shotId = this.route.snapshot.paramMap.get('shotId');
	    });

	    this.shotService.getShots().subscribe(res => {
       		this.shot = res[this.shotId];
     	});
	}

	mouseOver(event, id) {
    	event.target.src = this.shot.avatar;
  	}

  	mouseLeave(event, id) {
    	event.target.src = this.shot.thumbnail;
  	}

}
