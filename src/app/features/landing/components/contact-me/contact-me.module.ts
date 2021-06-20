import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactMeComponent } from './contact-me.component';
import { HighlightDirectiveModule } from '@shared/directives/highlight/highlight.directive';
import { DividerModule } from '@shared/components/divider/divider.module';
import { TagModule } from '@shared/components/tag/tag.module';
import { IconModule } from 'src/app/core/icons/icon.module';
import { ButtonModule } from '@shared/components/button/button.module';

@NgModule({
  imports: [
    CommonModule,
    HighlightDirectiveModule,
    DividerModule,
    TagModule,
    IconModule,
    ButtonModule
  ],
  declarations: [ContactMeComponent],
  exports: [ContactMeComponent]
})
export class ContactMeModule { }
