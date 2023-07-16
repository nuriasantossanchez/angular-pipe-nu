import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[yellowDirective]',
})
export class YellowDirective {
  yellow = document.getElementById("yellow");

  @HostListener('mouseover', ['$event'])
  onMouseOver() {
    this.yellow!.style.backgroundColor = 'yellow';
  }

  @HostListener('mouseleave', ['$event'])
  onMouseLeave() {
    this.yellow!.style.backgroundColor = 'white';
  }
}
