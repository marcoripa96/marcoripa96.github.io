import { NgModule } from '@angular/core';
import { ExtraOptions, RouterModule, Routes } from '@angular/router';

const routerOptions: ExtraOptions = {
  onSameUrlNavigation: 'reload',
  anchorScrolling: 'enabled'
};

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('@features/landing/landing.module').then(m => m.LandingModule)
  },
  {
    path: 'secret',
    loadChildren: () => import('@features/secret-area/secret-area.module').then(m => m.SecretAreaModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, routerOptions)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
