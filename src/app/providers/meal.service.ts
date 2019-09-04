import { Injectable } from '@angular/core';
import { Meal } from '../../app/classes/Meal';
import { HttpClient } from '@angular/common/http';

/*
  Generated class for the MealProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class MealService {
  constructor(public http: HttpClient) {}

  baseURL = 'http://localhost:54640/api/';
  public SaveToServer(path: string, hour: Date, labels: string[]): any {
    const formData = new FormData();
    formData.append('path', path);
    // formData.append("hour", hour.toDateString());
    const allLabels: string = labels.join(',');
    formData.append('labels', allLabels);
    alert(allLabels);
    const res = this.http.post(this.baseURL + 'meal/upload', formData);
    return new Promise(resolve => {
      res.subscribe(data => {
        resolve(data);
      });
    });
  }

  public GetTodayMeals() {
    const myS = 1;
    const res = this.http.get(this.baseURL + 'meal?dateTime=' + myS);
    return new Promise(resolve => {
      res.subscribe(data => {
        resolve(data);
      });
    });
  }
}
