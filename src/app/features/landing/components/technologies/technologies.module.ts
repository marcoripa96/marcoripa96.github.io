import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TechnologiesComponent } from './technologies.component';
import { IconModule } from 'src/app/core/icons/icon.module';
import { TooltipModule } from '@shared/components/tooltip/tooltip.module';

@NgModule({
  imports: [
    CommonModule,
    IconModule,
    TooltipModule
  ],
  declarations: [TechnologiesComponent],
  exports: [TechnologiesComponent]
})
export class TechnologiesModule { }
