import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FullScreenOverlayComponent } from './full-screen-overlay.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [FullScreenOverlayComponent],
  exports: [FullScreenOverlayComponent]
})
export class FullScreenOverlayModule { }
