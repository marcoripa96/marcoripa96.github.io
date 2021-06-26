import { trigger, state, style, transition, animate, AnimationEvent, query, animateChild } from '@angular/animations';
import { DOCUMENT } from '@angular/common';
import { ChangeDetectionStrategy, Component, ElementRef, HostBinding, HostListener, Inject, OnDestroy, OnInit, Renderer2, TemplateRef } from '@angular/core';
import { tap } from 'rxjs/operators';
import { FullScreenOverlayService, OverlayContent } from './full-screen-overlay.service';

@Component({
  selector: 'app-full-screen-overlay',
  templateUrl: './full-screen-overlay.component.html',
  styleUrls: ['./full-screen-overlay.component.scss'],
  host: {
    'class': 'inactive'
  },
  animations: [
    trigger('slideInOut', [
      transition(':enter', [
        style({
          transform: 'translateX(100%)'
        }),
        animate('250ms ease-out', style({ transform: 'translateX(0)' })),
        query( '@*', animateChild() )
      ]
      ),
      transition(':leave', [
        style({
          transform: 'translateX(0)'
        }),
        animate('250ms ease-out', style({ transform: 'translateX(100%)' }))
      ]
      ),
    ])
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FullScreenOverlayComponent implements OnInit {

  readonly template$ = this._overlayService.template$.pipe(
    tap(res => this._setBackdrop(res))
  );

  constructor(
    private _renderer: Renderer2,
    private _overlayService: FullScreenOverlayService,
    private _el: ElementRef,
    @Inject(DOCUMENT) private doc: Document
  ) { }

  ngOnInit() { }

  backdropClicked(event: Event): void {
    this._overlayService.dismiss();
  }

  onAnimationDone(event: AnimationEvent): void {
    if(event.toState === 'void') {
      this._renderer.setStyle(this.doc.body, 'overflow-y', 'auto');
      this._renderer.removeClass(this._el.nativeElement, 'active');
      this._renderer.addClass(this._el.nativeElement, 'inactive')
    }
  }

  private _setBackdrop(res: OverlayContent): void {
    if (res.content) {
      this._renderer.setStyle(this.doc.body, 'overflow-y', 'hidden');
      this._renderer.removeClass(this._el.nativeElement, 'inactive');
      this._renderer.addClass(this._el.nativeElement, 'active');
    }
  }

}
