import { Component, Inject, OnInit } from '@angular/core';
import { AutoUnsub } from '@shared/decorators/auto-unsub';
import { WINDOW } from '@ng-web-apis/common';
import { fromEvent } from 'rxjs';
import { map } from 'rxjs/operators';
import { ScrollService } from '@shared/services/scroll.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
@AutoUnsub()
export class AppComponent implements OnInit {

  readonly scroll$ = fromEvent(this.window, 'scroll').pipe(
    map(() => this.window.scrollY)
  );

  constructor(
    private readonly _scrollService: ScrollService,
    @Inject(WINDOW) private readonly window: Window
  ) {}

  ngOnInit() {
    this.scroll$.subscribe(scrollY => {
      this._scrollService.updateScrollY(scrollY);
    });
  }
}
