import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlight]',
})
export class HighlightDirective {
  constructor(private element: ElementRef) {}

  @HostListener('mouseenter')
  onMouseEnter() {
    this.element.nativeElement.style.backgroundColor = 'yellow';
    this.element.nativeElement.style.color = 'red';
    this.element.nativeElement.style.width = '140px';
  }

  @HostListener('mouseleave')
  onMouseLeave() {
    this.element.nativeElement.style.backgroundColor = 'white';
    this.element.nativeElement.style.color = 'gray';
  }
}
