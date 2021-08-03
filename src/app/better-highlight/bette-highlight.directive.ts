import { Directive, ElementRef, HostBinding, HostListener, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit {
  @Input() defaultColor: string = 'transparent'
  @Input() highlightColor: string = 'blue'
  @HostBinding('style.backgroundColor') backgroundColor: string;

  @HostListener('mouseenter') mouseover(eventData: Event) {
    this.backgroundColor = this.highlightColor
    //this.renerer.setStyle(this.elReft.nativeElement, 'background-color', 'blue')
  }
  @HostListener('mouseleave') mouseleave(eventData: Event) {
    //  this.renerer.setStyle(this.elReft.nativeElement, 'background-color', 'transparent')
    this.backgroundColor = this.defaultColor;
  }

  constructor(private elReft: ElementRef, private renerer: Renderer2) { }
  ngOnInit() {
    // this.renerer.setStyle(this.elReft.nativeElement, 'background-color', 'blue')
    this.backgroundColor = "brown";
  }
}
