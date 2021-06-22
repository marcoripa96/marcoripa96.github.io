import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SecretAreaComponent } from './secret-area.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: SecretAreaComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ],
  declarations: [SecretAreaComponent]
})
export class SecretAreaModule { }
