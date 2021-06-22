import { DOCUMENT } from '@angular/common';
import { ChangeDetectionStrategy, Component, Inject, OnDestroy, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoaderComponent implements OnInit, OnDestroy {

  constructor(
    @Inject(DOCUMENT) private document: Document,
    private _renderer: Renderer2
  ) { }

  ngOnInit() {
    this._renderer.setStyle(this.document.body, 'overflow-y', 'hidden');
  }

  ngOnDestroy() {
    this._renderer.setStyle(this.document.body, 'overflow-y', 'scroll');
  }

}
