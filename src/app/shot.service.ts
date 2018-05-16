import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class ShotService {

  constructor(private http: HttpClient) { }

  getShots() {
  	return this.http.get('../assets/shots.json');
  }

}
