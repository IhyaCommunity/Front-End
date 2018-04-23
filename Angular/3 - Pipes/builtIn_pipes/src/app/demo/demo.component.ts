import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.less']
})
export class DemoComponent implements OnInit {

  text: string = 'lorem lipsum ...';
  text2: string = 'LOREM LIPSUM ...';

  floatValue: number = 4.98564;

  value = 32025;
  value2 = 123456789;

  progress = 1;
  progress2 = .5;
  progress3 = .25;
  progress4 = .01;

  price = 500;

  currentDate = new Date();


  months = ["Jan", "Feb", "Mar", "April", "May", "Jun", "July", "Aug", "Sept", "Oct", "Nov", "Dec"];

  userData = {
    name: 'xyz',
    age: '25',
    adress: {
      area: '#H123,st 001, abc, xyz'
    }
  }

  ngOnInit() {
  }

}
