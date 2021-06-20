import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent, CardDescription, CardFooter, CardFrameDetails, CardTitle } from './card.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    CardComponent, 
    CardTitle,
    CardDescription,
    CardFooter,
    CardFrameDetails
  ],
  exports: [
    CardComponent, 
    CardTitle,
    CardDescription,
    CardFooter,
    CardFrameDetails
  ]
})
export class CardModule { }
