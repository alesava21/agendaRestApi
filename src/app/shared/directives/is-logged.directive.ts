import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[isLogged]'
})
export class IsLoggedDirective {

  @Input() set isLogged(isLoggedin: boolean){
    if(!isLoggedin){
      this.elementRef.nativeElement.style.display = 'none';
    }else{
      this.elementRef.nativeElement.style.display = 'block'
    }

  }

  constructor(private elementRef: ElementRef) { }

}
