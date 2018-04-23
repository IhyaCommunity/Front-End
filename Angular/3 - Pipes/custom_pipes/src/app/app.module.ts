import { FormatSize } from './demo/formateSize.pipe';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { DemoComponent } from './demo/demo.component';
import { CustomPipe } from './demo/custom.pipe';
import { FirstLetter } from './demo/firstLetter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    DemoComponent,
    CustomPipe,
    FirstLetter,
    FormatSize
  ],
  imports: [
    BrowserModule,
    FormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
