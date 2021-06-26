import { trigger, state, style, transition, animate, animateChild, query, stagger } from '@angular/animations';
import { ChangeDetectionStrategy, Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { FullScreenOverlayService } from '@shared/components/full-screen-overlay/full-screen-overlay.service';
import { ScrollService } from '@shared/services/scroll.service';
import { distinctUntilChanged, map, pairwise, startWith, tap } from 'rxjs/operators';

@Component({
  selector: 'toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss'],
  animations: [
    trigger('TranslateUpDown', [
      state('hidden', style({ transform: 'translateY(-100%)' })),
      state('visible', style({ transform: 'translateY(0%)' })),
      state('visible-raised', style({ transform: 'translateY(0%)',  boxShadow: 'rgb(0 0 0 / 12%) 0px 4px 16px'})),
      transition('* => *', animate('300ms ease-out')),
    ]),
    trigger('list', [
      transition(':enter', [
        query('@*',
          stagger(150, animateChild())
        )
      ])
    ]),
    trigger('dropDown', [
      transition(':enter', [
        style({
          opacity: 0,
          transform: 'translateY(-100%)'
        }), 
        animate('0.6s cubic-bezier(0.34, 1.56, 0.64, 1)', style({
          opacity: 1,
          transform: 'translateY(0)'
        }))
      ])
    ]),
    trigger('enterBottom', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(40px)'}),
        animate('300ms cubic-bezier(0.645,0.045,0.355,1)', style({opacity: 1, transform: 'translateY(0)'}))
      ]),
    ]),
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ToolbarComponent implements OnInit {

  @ViewChild('menuContent') menuContent!: TemplateRef<any>;

  readonly scrolled$ = this._scrollService.scroll$.pipe(
    startWith(0),
    pairwise(),
    map(([previousValue, currentValue]) => {
      if (previousValue < currentValue) {
        return 'hidden';
      } else if (previousValue > currentValue && currentValue > 0) {
        return 'visible-raised'
      } else {
        return 'visible'
      }
    }),
    distinctUntilChanged()
  )

  constructor(
    private readonly _scrollService: ScrollService,
    private readonly _overlayService: FullScreenOverlayService
  ) { }

  ngOnInit() {}

  toggleMenu(): void {
    this._overlayService.setOverlay({content: this.menuContent});
  }

}
