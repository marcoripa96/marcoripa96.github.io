import { trigger, state, style, transition, animate, query, stagger, animateChild } from '@angular/animations';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'technologies',
  templateUrl: './technologies.component.html',
  styleUrls: ['./technologies.component.scss'],
  animations: [
    trigger('enterBottom', [
      state('false', style({ opacity: 0, transform: 'translateY(40px)'})),
      state('true', style({  opacity: 1, transform: 'translateY(0)' })),
      transition('false => true', animate('0.6s 300ms cubic-bezier(0.34, 1.56, 0.64, 1)')),
    ]),
    trigger('enterBottomFast', [
      state('false', style({ opacity: 0, transform: 'translateY(20px)'})),
      state('true', style({  opacity: 1, transform: 'translateY(0)' })),
      transition('false => true', animate('300ms 300ms cubic-bezier(0.645,0.045,0.355,1)')),
    ]),
    trigger('list', [
      transition('* => true', [
        query('@*',
          stagger(150, animateChild())
        )
      ])
    ])
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TechnologiesComponent implements OnInit {

  intersecting: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  onIntersection(entries: any): void {
    entries.forEach((entry: any) => {
      if (entry.isIntersecting) {
        this.intersecting = true;
      }
    });
  }

}
