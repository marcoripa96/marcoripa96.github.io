import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header.component';
import { HighlightDirectiveModule } from '@shared/directives/highlight/highlight.directive';
import { TagModule } from '@shared/components/tag/tag.module';
import { WobbleWordModule } from '../wobble-word/wobble-word.module';
import { IconModule } from 'src/app/core/icons/icon.module';
import { ButtonModule } from '@shared/components/button/button.module';

@NgModule({
  imports: [
    CommonModule,
    HighlightDirectiveModule,
    TagModule,
    WobbleWordModule,
    IconModule,
    ButtonModule,
  ],
  declarations: [HeaderComponent],
  exports: [HeaderComponent]
})
export class HeaderModule { }
