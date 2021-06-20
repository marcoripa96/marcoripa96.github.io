import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent, ListItem } from './list.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ListComponent, ListItem],
  exports: [ListComponent, ListItem]
})
export class ListModule { }
