import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingComponent } from './landing/landing.component';
import { ScienceComponent } from './science/science.component';
import { PoliticsComponent } from './politics/politics.component';
import { GlobalComponent } from './global/global.component';
import { TechComponent } from './tech/tech.component';


const appRoutes: Routes = [
  {
    path: '',
    component: LandingComponent
  },
  {
    path: 'science',
    component: ScienceComponent
  },
  {
    path: 'politics',
    component: PoliticsComponent
  },
  {
    path: 'global',
    component: GlobalComponent
  },
  {
    path: 'tech',
    component: TechComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
