import { Component, OnInit } from '@angular/core';

import { NavController, NavParams } from '@ionic/angular';

import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-day',
  templateUrl: './day.page.html',
  styleUrls: ['./day.page.scss'],
})
export class DayPage  {
  
  data: any;

  constructor(private route: ActivatedRoute, private router: Router) {
    this.route.queryParams.subscribe(params => {
      if (params && params.special) {
        this.data = JSON.parse(params.special);
      }
    });
  // ionViewDidLoad() {
  //   console.log('ionViewDidLoad DayPage');
  // }

}
 }