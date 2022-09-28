import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: 'img'
})
export class LazyImageDirective {
  constructor({ nativeElement }: ElementRef<HTMLImageElement>) {
    if ('loading' in HTMLImageElement.prototype) {
      nativeElement.setAttribute('loading', 'lazy');
    }
  }
}
