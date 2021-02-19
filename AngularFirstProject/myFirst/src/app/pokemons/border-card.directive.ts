import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appBorderCard]',
})
export class BorderCardDirective {
  constructor(private el: ElementRef) {
    this.setBorder('#f5f5f5');
    this.setHeight(180);
  }

  @Input('appBorderCard') borderColor: string; // Alias
  @Input() appBorderCard: string; // Without Alias

  @HostListener('mouseenter') onMouseEnter() {
    //this.setBorder( this.borderColor || '#009688');
    this.setBorder(this.appBorderCard || '#009688');
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.setBorder('#f5f5f5');
  }
  private setBorder(color: string) {
    let border = 'solid 4px ' + color;
    this.el.nativeElement.style.border = border;
  }

  private setHeight(height: number) {
    this.el.nativeElement.style.height = height + 'px';
  }
}
