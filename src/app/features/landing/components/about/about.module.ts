import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from './about.component';
import { HighlightDirectiveModule } from '@shared/directives/highlight/highlight.directive';
import { DividerModule } from '@shared/components/divider/divider.module';
import { IntersectionObserverModule } from '@ng-web-apis/intersection-observer';

@NgModule({
  imports: [
    CommonModule,
    HighlightDirectiveModule,
    DividerModule,
    IntersectionObserverModule
  ],
  declarations: [AboutComponent],
  exports: [AboutComponent]
})
export class AboutModule { }
