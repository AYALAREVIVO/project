import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

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
items=['11','22'];
pectures = [
  {
  img:'https://files.geektime.co.il/wp-content/uploads/2018/04/GettyImages-641778984-1523445670.jpg',
  lab:['11','22','44']
  },
  {
    img:'https://files.geektime.co.il/wp-content/uploads/2018/04/GettyImages-641778984-1523445670.jpg',
    lab:['11','55','33']
  },
  {
    img:'https://files.geektime.co.il/wp-content/uploads/2018/04/GettyImages-641778984-1523445670.jpg',
    lab:['11','22','33']
  }
  ]
  data: any;
 ngOnInit(){
   
 }
 constructor(private route: ActivatedRoute, private router: Router) {
  this.route.queryParams.subscribe(params => {
    if (params && params.special) {
      this.data = JSON.parse(params.special);
    }
  });
}
 

}
