import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHighlightCard]',
  standalone:true
})
export class HighlightCardDirective {
  @Input() specialColor:string = '';
  @Input("appHighlightCard") directiveColor:string = '';
  constructor(private element:ElementRef) { 
    this.element.nativeElement.style.background = this.directiveColor;
    this.element.nativeElement.style.borderRadius  = "30px";
    this.element.nativeElement.style.boxShadow = "10px 10px 5px rgba(0,0,0,0.5)";
  }
  @HostListener('mouseover') over(){
    this.element.nativeElement.style.background = this.specialColor;
    this.element.nativeElement.style.boxShadow = "30px 30px 5px rgba(0,0,0,0.5)";

  }
  @HostListener ('mouseout') out(){
    this.element.nativeElement.style.background = this.directiveColor;
    this.element.nativeElement.style.boxShadow = "10px 10px 5px rgba(0,0,0,0.5)";
  }
}
