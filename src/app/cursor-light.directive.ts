import { Directive, HostListener, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appCursorLight]'
})
export class CursorLightDirective {

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  @HostListener('document:mousemove', ['$event'])
  onMouseMove(event: MouseEvent) {
    const light = this.el.nativeElement;
    const x = event.clientX;
    const y = event.clientY;
    this.renderer.setStyle(light, 'transform', `translate(${x}px, ${y}px)`);
  }
}
