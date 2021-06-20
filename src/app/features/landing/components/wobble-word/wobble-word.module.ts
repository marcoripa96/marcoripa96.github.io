import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WobbleWordComponent } from './wobble-word.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [WobbleWordComponent],
  exports: [WobbleWordComponent]
})
export class WobbleWordModule { }
