import { ChangeDetectionStrategy, Component, HostListener, OnInit } from '@angular/core';

const KEY_CODE = 'KeyM';

@Component({
  selector: 'circle-link',
  templateUrl: './circle-link.component.html',
  styleUrls: ['./circle-link.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CircleLinkComponent implements OnInit {
  private _currentKey: string = '';
  private _hovering: boolean = false;

  expandable: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  @HostListener('mouseenter', ['$event']) 
  mouseenter(event: MouseEvent) {
    this._hovering = true;
    if (this._currentKey === KEY_CODE) {
      this.expandable = true;
    } else {
      this.expandable = false;
    }
  }

  @HostListener('mouseleave', ['$event']) 
  mouseleave(event: MouseEvent) {
    this._hovering = false;
  }


  @HostListener('document:keydown', ['$event'])
  keydown(e: KeyboardEvent) {
    console.log(e);
    if (this._currentKey !== e.code) {
      this._currentKey = e.code;

      if (this._hovering && this._currentKey === KEY_CODE) {
        this.expandable = true;
      } else {
        this.expandable = false;
      }
    }
  }

  @HostListener('document:keyup', ['$event'])
  keyup(e: KeyboardEvent) {
    if (this._hovering && this._currentKey === KEY_CODE) {
      this.expandable = false;
    }
    this._currentKey = '';
  }

}
