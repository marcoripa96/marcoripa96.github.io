import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SphereComponent } from './sphere.component';
import { ToArrayPipeModule } from '@shared/pipes/toArray.pipe';

@NgModule({
  imports: [
    CommonModule,
    ToArrayPipeModule
  ],
  declarations: [SphereComponent],
  exports: [SphereComponent]
})
export class SphereModule { }
