import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.less']
})
export class DemoComponent implements OnInit {

  text = 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam veritatis, ipsum accusamus non harum corporis! Repudiandae officia architecto delectus tempore nemo, adipisci voluptas illum ducimus placeat, at facilis. Id, enim!';
  text2 = 'abcxyz';

  ngOnInit() {
  }

}
