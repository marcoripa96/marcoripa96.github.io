import { Directive, ElementRef, NgModule } from '@angular/core';

@Directive({
  selector: '[highlight]'
})
export class HighlightDirective {

  constructor(private _el: ElementRef) { 
    this._el.nativeElement.style.color = 'var(--primary)'
  }

}

@NgModule({
  declarations: [HighlightDirective],
  exports:[HighlightDirective]
 })
 export class HighlightDirectiveModule{}
