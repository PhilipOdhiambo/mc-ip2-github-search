import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appActiveUser]'
})
export class ActiveUserDirective {

  constructor(private elem:ElementRef) { 
    this.elem.nativeElement.style.backgroundColor='blue'
    this.elem.nativeElement.style.color='white'

  }

}
