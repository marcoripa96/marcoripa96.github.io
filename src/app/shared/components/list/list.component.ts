import { ChangeDetectionStrategy, Component, Directive, HostBinding, Input, OnInit, ViewEncapsulation } from '@angular/core';

@Directive({
  selector: 'list-item, [listItem], [list-item]',
  host: {'class': 'list-item'}
})
export class ListItem {}


@Component({
  selector: 'list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ListComponent implements OnInit {

  @Input() 
  @HostBinding('attr.data-direction')
  direction: 'horizontal' | 'vertical' = 'vertical';

  constructor() { }

  ngOnInit() {
  }

}
