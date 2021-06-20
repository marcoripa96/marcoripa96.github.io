import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'technologies',
  templateUrl: './technologies.component.html',
  styleUrls: ['./technologies.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TechnologiesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
