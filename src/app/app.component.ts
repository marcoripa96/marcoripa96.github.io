import { Component } from '@angular/core';
import { IconRegistryService } from './core/icons/icon-registry.service';
import { angularIcon, gitHubIcon, gitIcon, handIcon, heartIcon, htmlIcon, jsIcon, mailIcon, nodeIcon, npmIcon, pythonIcon, sassIcon, smileIcon, tfIcon, tsIcon } from './core/icons/icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'portfolio';

  constructor(private _iconRegistry: IconRegistryService) {
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
      smileIcon
    ])
  }
}
