import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.less']
})
export class DemoComponent implements OnInit {


  messege = 'This is some text...';
  color = {
    r: 'Red',
    g: 'Green',
    b: 'Blue'
  }

  size = {
    width: 10,
    height: 10,
  }
  showMessege() {
    return 'Angular is awesome!'
  }


  institute = 'SkyImpel';
  name = 'Angular';
  val = 123;
  imgUrl = '../../favicon.ico';


  showAlert(): void {
    alert(this.messege)
  }

  count: number;

  constructor() {
    this.count = 0;
  }
  counter() {
    this.count++;
  }

  events($event) {
    console.log($event);
  }

  // old way 
  onKeyUp($event) {
    if ($event.keyCode === 13) console.log('Enter was pressed')
  }

  // ng way
  enterKey() {
    console.log('Enter was Pressed');;
  }

  showValueData(email) {
    console.log(email);
  }


  data = "sample@example.com";

  CustomTwoWayBinding() {
    console.log(this.data);
  }

  demo;
  showDemoData() {
    console.log(this.demo);
    alert(this.demo)    
  }

  ngOnInit() {
  }

}
