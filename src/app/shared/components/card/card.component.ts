import { ChangeDetectionStrategy, Component, Directive, Input, OnInit, ViewEncapsulation } from '@angular/core';

@Directive({
  selector: 'card-title, [cardTitle], [card-title]',
  host: {'class': 'card-title'}
})
export class CardTitle {}

@Directive({
  selector: 'card-description, [cardDescription], [card-description]',
  host: {'class': 'card-description'}
})
export class CardDescription {}

@Directive({
  selector: 'card-footer, [cardFooter], [card-footer,]',
  host: {'class': 'card-footer'}
})
export class CardFooter {}

@Directive({
  selector: 'card-frame-details, [cardFrameDetails], [card-frame-details]',
  host: {'class': 'card-footer'}
})
export class CardFrameDetails {}

@Component({
  selector: 'card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CardComponent implements OnInit {

  @Input() link: string = '';

  constructor() { }

  ngOnInit() {
  }

}
