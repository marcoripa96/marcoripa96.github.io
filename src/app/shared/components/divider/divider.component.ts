import { ChangeDetectionStrategy, Component, HostBinding, Input, OnInit } from '@angular/core';
import { AppDivider } from './divider';

@Component({
  selector: 'divider',
  template: '',
  styleUrls: ['./divider.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DividerComponent implements OnInit {

  @Input()
  @HostBinding('attr.data-direction')
  direction: AppDivider = 'horizontal'

  constructor() { }

  ngOnInit() {
  }

}
