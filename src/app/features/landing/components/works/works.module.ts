import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WorksComponent } from './works.component';
import { HighlightDirectiveModule } from '@shared/directives/highlight/highlight.directive';
import { DividerModule } from '@shared/components/divider/divider.module';
import { CardModule } from '@shared/components/card/card.module';
import { IconModule } from 'src/app/core/icons/icon.module';
import { ListModule } from '@shared/components/list/list.module';

@NgModule({
  imports: [
    CommonModule,
    HighlightDirectiveModule,
    DividerModule,
    CardModule,
    IconModule,
    ListModule
  ],
  declarations: [WorksComponent],
  exports: [WorksComponent]
})
export class WorksModule { }
