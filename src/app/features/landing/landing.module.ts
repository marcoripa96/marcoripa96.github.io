import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingComponent } from './landing.component';
import { RouterModule, Routes } from '@angular/router';
import { HeaderModule } from './components/header/header.module';
import { AboutModule } from './components/about/about.module';
import { WorksModule } from './components/works/works.module';
import { TechnologiesModule } from './components/technologies/technologies.module';
import { ContactMeModule } from './components/contact-me/contact-me.module';
import { IconModule } from 'src/app/core/icons/icon.module';
import { LoaderModule } from './components/loader/loader.module';

const routes: Routes = [
  {
    path: '',
    component: LandingComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    HeaderModule,
    AboutModule,
    TechnologiesModule,
    WorksModule,
    ContactMeModule,
    IconModule,
    LoaderModule
  ],
  declarations: [LandingComponent]
})
export class LandingModule { }
