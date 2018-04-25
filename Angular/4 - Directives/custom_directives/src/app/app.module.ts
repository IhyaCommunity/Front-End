
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { DemoComponent } from './demo/demo.component';
import { InputFormateDirective } from './input-formate.directive';



@NgModule({
  declarations: [
    AppComponent,
    DemoComponent,
    InputFormateDirective
  ],
  imports: [
    BrowserModule,
    FormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
