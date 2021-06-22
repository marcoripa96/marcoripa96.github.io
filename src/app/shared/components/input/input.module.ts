import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputComponent } from './input.component';
import { FormsModule } from '@angular/forms';
import { IconModule } from 'src/app/core/icons/icon.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IconModule
  ],
  declarations: [InputComponent],
  exports: [InputComponent]
})
export class InputModule { }
