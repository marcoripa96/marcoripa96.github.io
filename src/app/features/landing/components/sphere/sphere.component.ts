import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sphere',
  templateUrl: './sphere.component.html',
  styleUrls: ['./sphere.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SphereComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
