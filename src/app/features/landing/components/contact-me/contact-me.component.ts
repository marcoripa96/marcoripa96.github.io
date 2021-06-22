import { trigger, state, style, transition, animate, query, stagger, animateChild } from '@angular/animations';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'contact-me',
  templateUrl: './contact-me.component.html',
  styleUrls: ['./contact-me.component.scss'],
  animations: [
    trigger('enterBottomFast', [
      state('false', style({ opacity: 0, transform: 'translateY(20px)'})),
      state('true', style({  opacity: 1, transform: 'translateY(0)' })),
      transition('false => true', animate('300ms cubic-bezier(0.645,0.045,0.355,1)')),
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
export class ContactMeComponent implements OnInit {

  intersecting = false;

  constructor() { }

  ngOnInit() {}

  onIntersection(entries: any): void {
    entries.forEach((entry: any) => {
      if (entry.isIntersecting) {
        this.intersecting = true;
      }
    });
  }

}
