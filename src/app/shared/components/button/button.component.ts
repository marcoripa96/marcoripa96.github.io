import { ChangeDetectionStrategy, Component, HostBinding, Input, OnInit } from '@angular/core';
import { AppButton } from './button';

@Component({
  selector: 'button[appButton]',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ButtonComponent implements OnInit {

  @Input()
  @HostBinding('attr.data-appearance')
  appearance: AppButton = 'filled'

  @Input()
  icon: string = '';

  constructor() {}

  ngOnInit() {
  }

}
