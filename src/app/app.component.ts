import { Component, Inject, OnInit } from '@angular/core';
import { AutoUnsub } from '@shared/decorators/auto-unsub';
import { WINDOW } from '@ng-web-apis/common';
import { fromEvent } from 'rxjs';
import { IconRegistryService } from './core/icons/icon-registry.service';
import {
  angularIcon, gitHubIcon, gitIcon, heartIcon,
  htmlIcon, jsIcon, mailIcon, nodeIcon, npmIcon, playIcon, pythonIcon,
  questionMarkIcon,
  sassIcon, smileIcon, tfIcon, tsIcon
} from './core/icons/icons';
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
    private readonly _iconRegistry: IconRegistryService,
    private readonly _scrollService: ScrollService,
    @Inject(WINDOW) private readonly window: Window
  ) {
    this._iconRegistry.registerIcons([
      heartIcon,
      mailIcon,
      angularIcon,
      nodeIcon,
      npmIcon,
      htmlIcon,
      pythonIcon,
      sassIcon,
      jsIcon,
      tsIcon,
      tfIcon,
      gitIcon,
      gitHubIcon,
      smileIcon,
      questionMarkIcon,
      playIcon
    ])
  }

  ngOnInit() {
    this.scroll$.subscribe(scrollY => {
      this._scrollService.updateScrollY(scrollY);
    });
  }
}
