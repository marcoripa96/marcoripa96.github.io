import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TextareaComponent } from './textarea.component';
import { FormsModule } from '@angular/forms';
import { IconModule } from 'src/app/core/icons/icon.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IconModule
  ],
  declarations: [TextareaComponent],
  exports: [TextareaComponent]
})
export class TextareaModule { }
