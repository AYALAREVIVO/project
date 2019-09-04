import { Injectable } from '@angular/core';
import { Label } from '../../app/classes/Label';
import { Meal } from '../../app/classes/Meal';
import { Observable } from 'rxjs';
import {
  Http,
  Response,
  RequestOptions,
  ResponseContentType
} from '@angular/http';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/map';
import {
  HttpClient,
  HttpHeaders,
  HttpParams,
  HttpErrorResponse
} from '@angular/common/http';
import { Body } from '@angular/http/src/body';

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
    const _formData = new FormData();
    const meal = new Meal(path, hour, labels);
    _formData.append('path', path);
    // _formData.append("hour", hour.toDateString());
    const allLabels: string = labels.join(',');
    _formData.append('labels', allLabels);
    alert(allLabels);
    const res = this.http.post(
      this.baseURL + 'meal/upload',
      _formData
    );
    return new Promise(resolve => {
      res.subscribe(data => {
        resolve(data);
      });
    });
  }


  public GetTodayMeals(myDate: Date) {
    const myS = 1;
    const res = this.http.get(
      this.baseURL + 'meal?dateTime=' + myS
    );
    return new Promise(resolve => {
      res.subscribe(data => {
        resolve(data);
      });
    });
  }
}
