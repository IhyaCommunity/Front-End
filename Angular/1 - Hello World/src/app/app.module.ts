import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { DemoComponent } from './demo/demo.component';
import { DemoService } from './demo/demo.service';

@NgModule({
  // components registration
  declarations: [
    AppComponent,
    DemoComponent,


  ],
  // angular modules registration
  imports: [
    BrowserModule,
    FormsModule

  ],
  // services registraion
  providers: [],
  // combiners
  bootstrap: [AppComponent]
})
export class AppModule { }
