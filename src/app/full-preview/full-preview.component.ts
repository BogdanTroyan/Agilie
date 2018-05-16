import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ShotService} from '../shot.service';


@Component({
  selector: 'app-full-preview',
  templateUrl: './full-preview.component.html',
  styleUrls: ['./full-preview.component.css']
})
export class FullPreviewComponent implements OnInit {

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

}
