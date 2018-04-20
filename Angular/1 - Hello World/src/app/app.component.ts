import { Component } from '@angular/core';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less'],

})
export class AppComponent {
  // logic ...

  // properties
  title = "Hello World!";

  // methods
  showMessege() {
    return "Hello from showMessege() function."
  }
}

