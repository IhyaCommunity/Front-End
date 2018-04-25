import { Directive, HostListener, ElementRef } from '@angular/core';

@Directive({
  selector: '[appInputFormate]'
})
export class InputFormateDirective {

  constructor(private el: ElementRef) { }

  @HostListener('blur') onblur() {
    let val: string = this.el.nativeElement.value;
    this.el.nativeElement.value = val.toUpperCase();
    // this.el.nativeElement.value = val.toLowerCase();
    
    console.log('Blur...');
    
  }

  @HostListener('focus') onFocus() {
    console.log('Focus...');

  }




}
