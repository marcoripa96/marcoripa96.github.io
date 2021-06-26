import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToolbarComponent } from './toolbar.component';
import { ListModule } from '@shared/components/list/list.module';
import { HighlightDirectiveModule } from '@shared/directives/highlight/highlight.directive';
import { RouterModule } from '@angular/router';
import { IconModule } from '../icons/icon.module';
import { ButtonModule } from '@shared/components/button/button.module';

@NgModule({
  imports: [
    CommonModule,
    ListModule,
    HighlightDirectiveModule,
    RouterModule,
    IconModule,
    ButtonModule
  ],
  declarations: [ToolbarComponent],
  exports: [ToolbarComponent]
})
export class ToolbarModule { }
