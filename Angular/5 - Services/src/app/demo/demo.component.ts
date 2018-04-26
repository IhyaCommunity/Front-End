import { Component, OnInit } from '@angular/core';
import { ListServices } from '../list.service';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.less']
})
export class DemoComponent implements OnInit {

  samuraiList;
  constructor() {
    let List = new ListServices();
    this.samuraiList = List.getList();
  }

  ngOnInit() {
  }

}
