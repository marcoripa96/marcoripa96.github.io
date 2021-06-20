import { DOCUMENT } from '@angular/common';
import { ChangeDetectionStrategy, Component, ElementRef, Inject, Input, OnInit, Optional } from '@angular/core';
import { IconRegistryService } from './icon-registry.service';

@Component({
  selector: 'icon',
  template: `
    <ng-content></ng-content>
  `,
  styles: [
    ':host{display: inline-block; width: 20px; height: 20px;}',
    ':host::ng-deep svg{display: inherit; width: 100%; height: 100%}'
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class IconComponent {

  private _svgIcon!: SVGElement;

  @Input()
  set name(iconName: string) {
    if (this._svgIcon) {
      this.element.nativeElement.removeChild(this._svgIcon);
    }
    const svgData = this.dinosaurIconRegistry.getIcon(iconName);
    this._svgIcon = this.svgElementFromString(svgData);
    this.element.nativeElement.appendChild(this._svgIcon);
  }

  constructor(
    private element: ElementRef, 
    private dinosaurIconRegistry: IconRegistryService,
    @Optional() @Inject(DOCUMENT) private document: any) {
  }

  private svgElementFromString(svgContent: string | undefined): SVGElement {
    const div = this.document.createElement('DIV');
    div.innerHTML = svgContent;
    return div.querySelector('svg') || this.document.createElementNS('http://www.w3.org/2000/svg', 'path');
  }

}
