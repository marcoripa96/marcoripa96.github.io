import { trigger, state, style, transition, animate, animateChild, query, stagger } from '@angular/animations';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  animations: [
    trigger('enter', [
      state('false', style({ opacity: 0, transform: 'translateY(40px)'})),
      state('true', style({  opacity: 1, transform: 'translateY(0)' })),
      transition('false => true', animate('0.6s 500ms cubic-bezier(0.34, 1.56, 0.64, 1)')),
    ]),
    trigger('list', [
      transition('* => true', [
        query('@enter',
          stagger(150, animateChild())
        )
      ])
    ])
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent implements OnInit {

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
