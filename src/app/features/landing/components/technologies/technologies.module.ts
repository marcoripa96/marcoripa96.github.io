import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TechnologiesComponent } from './technologies.component';
import { IconModule } from 'src/app/core/icons/icon.module';
import { TooltipModule } from '@shared/components/tooltip/tooltip.module';
import { IntersectionObserverModule } from '@ng-web-apis/intersection-observer';

@NgModule({
  imports: [
    CommonModule,
    IconModule,
    TooltipModule,
    IntersectionObserverModule
  ],
  declarations: [TechnologiesComponent],
  exports: [TechnologiesComponent]
})
export class TechnologiesModule { }
