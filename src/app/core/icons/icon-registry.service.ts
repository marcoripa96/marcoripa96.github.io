import { Injectable } from '@angular/core';
import { angularIcon, arrowRightIcon, gitHubIcon, gitIcon, heartIcon, 
  htmlIcon, Icon, jsIcon, mailIcon, menuIcon, nodeIcon, npmIcon, 
  playIcon, pythonIcon, questionMarkIcon, sassIcon, 
  smileIcon, tfIcon, tsIcon } from './icons';

@Injectable({
  providedIn: 'root'
})
export class IconRegistryService {
  private registry = new Map<string, string>();

  constructor() {
    this._registerCoreIcons();
  }

  public registerIcons(icons: Icon[]): void {
    icons.forEach((icon: Icon) => this.registry.set(icon.name, icon.data));
  }

  public getIcon(iconName: string): string | undefined {
    if (!this.registry.has(iconName)) {
      console.warn(`We could not find the Icon with the name ${iconName}, did you add it to the Icon registry?`);
    }
    return this.registry.get(iconName);
  }

  private _registerCoreIcons(): void {
    this.registerIcons([
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
      playIcon,
      menuIcon,
      arrowRightIcon
    ])
  }

}
