import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appActiveUser]'
})
export class ActiveUserDirective {

  constructor(private elem:ElementRef) { 
    this.elem.nativeElement.backgroundColor ="blue"
  }

}
