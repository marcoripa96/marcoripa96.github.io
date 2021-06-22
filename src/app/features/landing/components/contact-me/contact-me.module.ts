import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactMeComponent } from './contact-me.component';
import { HighlightDirectiveModule } from '@shared/directives/highlight/highlight.directive';
import { DividerModule } from '@shared/components/divider/divider.module';
import { TagModule } from '@shared/components/tag/tag.module';
import { IconModule } from 'src/app/core/icons/icon.module';
import { ButtonModule } from '@shared/components/button/button.module';
import { IntersectionObserverModule } from '@ng-web-apis/intersection-observer';

@NgModule({
  imports: [
    CommonModule,
    HighlightDirectiveModule,
    TagModule,
    IconModule,
    ButtonModule,
    IntersectionObserverModule
  ],
  declarations: [ContactMeComponent],
  exports: [ContactMeComponent]
})
export class ContactMeModule { }
