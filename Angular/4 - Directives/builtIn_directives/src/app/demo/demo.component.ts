import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.less']
})
export class DemoComponent implements OnInit {



  value = 1;

  data = {
    names: ['Usman']
  }
  someData = ['a', 'b', 'c', 'd'];

  arr = [1, 2, 3];
  text = 'Lorem lipsum...';
  isDone: boolean = true;


  viewMode: any;


  products = [
    { id: 1, name: 'Product1' },
    { id: 2, name: 'Product2' },
    { id: 3, name: 'Product3' }
  ]

  onAdd() {
    this.products.push({
      id: 4, name: 'Product4'
    })
  }

  onRemove(product) {
    let index = this.products.indexOf(product);
    this.products.splice(index, 1);
  }
  onChange(product) {
    product.name = 'Modified!'
  }


  ngOnInit() {
  }

}
