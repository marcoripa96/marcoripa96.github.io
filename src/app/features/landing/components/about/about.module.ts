import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from './about.component';
import { HighlightDirectiveModule } from '@shared/directives/highlight/highlight.directive';
import { DividerModule } from '@shared/components/divider/divider.module';

@NgModule({
  imports: [
    CommonModule,
    HighlightDirectiveModule,
    DividerModule
  ],
  declarations: [AboutComponent],
  exports: [AboutComponent]
})
export class AboutModule { }
