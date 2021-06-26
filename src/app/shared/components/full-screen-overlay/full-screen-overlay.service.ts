import { Injectable, TemplateRef } from '@angular/core';
import { Subject } from 'rxjs';

export interface OverlayContent {
  content: null | TemplateRef<any>;
}

@Injectable({
  providedIn: 'root'
})
export class FullScreenOverlayService {

  private _template$$: Subject<OverlayContent> = new Subject(); 

  readonly template$ = this._template$$.asObservable();

  constructor() { }

  public setOverlay(content: OverlayContent): void {
    this._template$$.next(content);
  }

  public dismiss(): void {
    this._template$$.next({content: null});
  }

}
