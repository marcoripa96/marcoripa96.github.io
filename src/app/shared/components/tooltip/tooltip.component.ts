import { trigger, state, style, transition, animate } from '@angular/animations';
import { ChangeDetectionStrategy, Component, HostListener, Input, OnInit, TemplateRef } from '@angular/core';

@Component({
  selector: 'tooltip',
  templateUrl: './tooltip.component.html',
  styleUrls: ['./tooltip.component.scss'],
  animations: [
    trigger('showHide', [
      transition(':enter', [
        style({ opacity: 0, transform: 'scale(0.5) translateY(-20px)'}),
        animate('250ms ease-out', style({ opacity: 1, transform: 'scale(1) translateY(0)' }))
      ]),
      transition(':leave', [
        style({ opacity: 1, transform: 'scale(1) translateY(0px)'}),
        animate('250ms ease-out', style({ opacity: 0, transform: 'scale(0.5) translateY(-20px)' }))
      ])
    ]),
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TooltipComponent implements OnInit {

  @Input() content!: TemplateRef<any>;

  showContent: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  @HostListener('mouseenter')
  mouseenter() {
    this.showContent = true;
  }

  @HostListener('mouseleave')
  mouseleave() {
    this.showContent = false;
  }

}
