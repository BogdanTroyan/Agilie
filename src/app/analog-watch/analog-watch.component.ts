import { Component, OnInit } from '@angular/core';

import { DigitalWatchComponent } from '../digital-watch/digital-watch.component';

@Component({
  selector: 'app-analog-watch',
  templateUrl: './analog-watch.component.html',
  styleUrls: ['./analog-watch.component.css']
})
export class AnalogWatchComponent extends DigitalWatchComponent implements OnInit {

  constructor() {
  	super();
   }

  ngOnInit() {
  }

  show() {
		let context: any;
		let watch: any;
		watch = document.getElementById('analog-watch');
		context = watch.getContext('2d');

		let radiusWatch: number = watch.width/2 - 10;
    	let OXwatch: number = watch.width/2;
    	let OYwatch: number = watch.height/2;
	
    	//Очистка экрана. 
    	context.fillStyle = "#ffffff";
    	context.fillRect(0, 0, watch.width, watch.height);
	
    	//Рисуем контур часов
    	context.strokeStyle =  "#000000";
    	context.lineWidth = 1;
    	context.beginPath();
    	context.arc(OXwatch, OYwatch, radiusWatch, 0, 2*Math.PI, true);
    	context.moveTo(OXwatch, OYwatch);
    	context.stroke();
    	context.closePath();

    	//Рисуем центр часов
    	context.beginPath();
    	context.strokeStyle =  "#000000";
    	context.fillStyle = "#ffffff";
    	context.lineWidth = 3;
    	context.arc(OXwatch, OYwatch, 5, 0, 2*Math.PI, true);
    	context.stroke();
    	context.fill();
    	context.closePath();

    	//Рисуем рисочки часов
    	let radiusNum1: number = radiusWatch - 10;
    	let radiusNum2: number; //Радиус расположения рисочек	
    	for (let tm = 0; tm < 60; tm++) {
	  		context.beginPath();
	  		if (tm % 5 == 0) { 
	  			radiusNum2 = radiusWatch - 20;
	  		} else {
	  			radiusNum2 = radiusWatch - 15;
	  		} 

	  		//координаты точки 1 для рисочек
	  		let xPoint1: number = OXwatch + radiusNum1 * Math.cos(-6*tm*(Math.PI/180) + Math.PI/2);
	  		let yPoint1: number = OYwatch - radiusNum1 * Math.sin(-6*tm*(Math.PI/180) + Math.PI/2);

	  		//точка 2 для рисочек
	  		let xPoint2: number = OXwatch + radiusNum2 * Math.cos(-6*tm*(Math.PI/180) + Math.PI/2);
	  		let yPoint2: number = OYwatch - radiusNum2 * Math.sin(-6*tm*(Math.PI/180) + Math.PI/2);

	  		//рисуем рисочки
	  		context.moveTo(xPoint1, yPoint1);
	  		context.lineTo(xPoint2, yPoint2);
	  		context.stroke();
	  		context.closePath();
    	}

    	//Оцифровка циферблата часов
    	for (let th = 1; th <= 12; th++) {
			context.beginPath();
			context.font = 'bold 25px sans-serif';
			let xText = OXwatch + (radiusNum1 - 30) * Math.cos(-30*th*(Math.PI/180) + Math.PI/2);
			let yText = OYwatch - (radiusNum1 - 30) * Math.sin(-30*th*(Math.PI/180) + Math.PI/2);
			if (th <= 9) {
				context.strokeText(th, xText - 5 , yText + 10);
			} else {
				context.strokeText(th, xText - 15 , yText + 10);
			}
     		context.stroke();
			context.closePath();	
    	}

    		//Рисуем стрелки
		let lengthSeconds = radiusNum1 - 10;
	    let lengthMinutes = radiusNum1 - 15;
	    let lengthHour = lengthMinutes / 1.5;
	    let date: Array<any>;
		date = this.update();                //Получаем датy
	    let t_sec = 6*date[2];                           //Определяем угол для секунд
	    let t_min = 6*(date[1] + (1/60)*date[2]); //Определяем угол для минут
	    let t_hour = 30*(date[0] + (1/60)*date[1]); //Определяем угол для часов
		
		//Рисуем секунды
	    context.beginPath();
	    context.strokeStyle =  "#FF0000";
	    context.moveTo(OXwatch, OYwatch);
	    context.lineTo(OXwatch + lengthSeconds*Math.cos(Math.PI/2 - t_sec*(Math.PI/180)),
					OYwatch - lengthSeconds*Math.sin(Math.PI/2 - t_sec*(Math.PI/180)));
	    context.stroke();
	    context.closePath();
		
	    //Рисуем минуты
	    context.beginPath();
	    context.strokeStyle =  "#000000";
	    context.lineWidth = 3;
	    context.moveTo(OXwatch, OYwatch);
	    context.lineTo(OXwatch + lengthMinutes*Math.cos(Math.PI/2 - t_min*(Math.PI/180)),
					 OYwatch - lengthMinutes*Math.sin(Math.PI/2 - t_min*(Math.PI/180)));
	    context.stroke();
	    context.closePath();

	    //Рисуем часы
	    context.beginPath();
	    context.lineWidth = 5;
	    context.moveTo(OXwatch, OYwatch);
	    context.lineTo(OXwatch + lengthHour*Math.cos(Math.PI/2 - t_hour*(Math.PI/180)),
					 OYwatch - lengthHour*Math.sin(Math.PI/2 - t_hour*(Math.PI/180)));
	    context.stroke();
	    context.closePath();	
	}

}
