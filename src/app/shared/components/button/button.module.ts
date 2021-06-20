import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './button.component';
import { IconModule } from 'src/app/core/icons/icon.module';

@NgModule({
  imports: [
    CommonModule,
    IconModule
  ],
  declarations: [ButtonComponent],
  exports: [ButtonComponent]
})
export class ButtonModule { }
