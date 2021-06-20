import { trigger, transition, animate, keyframes, style } from '@angular/animations';
import { ChangeDetectionStrategy, Component, HostBinding, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'wobble-word',
  templateUrl: './wobble-word.component.html',
  styleUrls: ['./wobble-word.component.scss'],
  animations: [
    trigger('wobble',[
      transition('false => true', [       
        animate('0.9s cubic-bezier(0.68, -0.6, 0.32, 1.6)', keyframes([ 
          style({transform: 'scale3d(1,1,1)'}), 
          style({transform: 'scale3d(0.7, 1, 1.7)'}), 
          style({transform: 'scale3d(1,1,1)'})
        ])),
      ])      
    ])
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WobbleWordComponent implements OnInit {

  private _animate = false;

  @HostBinding('@wobble') get slideIn(): boolean {
    return this._animate;
  }

  @HostListener('mouseenter') mouseenter() {
    this._animate = true;
  }

  @HostListener('@wobble.done') wobbleDone() {
    this._animate = false;
  }

  constructor() { }

  ngOnInit() {
  }


}
