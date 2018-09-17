import {Directive, ElementRef, HostListener, Input, Renderer2} from '@angular/core';

@Directive({
  selector: '[appDate]'
})
export class DateDirective {
  @Input()
  private date: Date;
  private paragraph;

  constructor(private el: ElementRef, private render: Renderer2) {
    this.paragraph = this.render.createElement('p');
  }

  @HostListener('mouseenter')
  mouseEnter(eventDate: Event) {
    this.paragraph.innerHTML = this.date.toLocaleDateString();
    this.render.appendChild(this.el.nativeElement, this.paragraph);
  }

  @HostListener('mouseleave')
  mouseLeave(eventDate: Event) {
    this.render.removeChild(this.el.nativeElement, this.paragraph);
  }
}
