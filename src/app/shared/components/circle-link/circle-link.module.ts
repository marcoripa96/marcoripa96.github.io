import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CircleLinkComponent } from './circle-link.component';
import { IconModule } from 'src/app/core/icons/icon.module';

@NgModule({
  imports: [
    CommonModule,
    IconModule
  ],
  declarations: [CircleLinkComponent],
  exports: [CircleLinkComponent]
})
export class CircleLinkModule { }
