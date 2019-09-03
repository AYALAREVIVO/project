import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Meal } from '../classes/Meal';

export interface pecture {
  img:string,
  lab:string[];
  }
  
@Component({
  selector: 'app-serch',
  templateUrl: './serch.page.html',
  styleUrls: ['./serch.page.scss'],
})
export class SerchPage implements OnInit {
pectures :Meal[];
  data: any;
 ngOnInit(){
   
 }
 constructor(private route: ActivatedRoute, private router: Router) {
  this.route.queryParams.subscribe(params => {
    if (params && params.special) {
      this.data = JSON.parse(params.special);
    }
  });
  //to pull sherch to item

}
 

}
