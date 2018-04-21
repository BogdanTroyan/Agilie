import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-digital-watch',
  templateUrl: './digital-watch.component.html',
  styleUrls: ['./digital-watch.component.css']
})
export class DigitalWatchComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  update() {
		let date = new Date();
		let hours = date.getHours();
		let minutes = date.getMinutes();
		let seconds = date.getSeconds();
		return [hours, minutes, seconds];
		}
	show() {
		let date: Array<any>;
		date = this.update();
		let watch = document.getElementById('digital-watch');
		if (date[0] < 10) date[0] = '0' + date[0];
		if (date[1] < 10) date[1] = '0' + date[1];
		if (date[2] < 10) date[2] = '0' + date[2];
		watch.innerHTML =  `${date[0]}:${date[1]}:${date[2]}`;
	}
	//@log
	start() {
		setInterval(() => this.show(), 1000);
      	this.show();
	}

}
