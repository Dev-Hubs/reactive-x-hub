import { Routes } from '@angular/router';
import { CombinationComponent } from './combination.component';
import { CombineAllComponent } from './combine-all/combine-all.component';

export const combinationRoutes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: CombinationComponent
  },
  {
    path: 'combine-all',
    component: CombineAllComponent
  },
  {
    path: 'combine-latest',
    redirectTo: '404'
  },
  {
    path: 'concat',
    redirectTo: '404'
  },
  {
    path: 'concat-all',
    redirectTo: '404'
  },
  {
    path: 'end-with',
    redirectTo: '404'
  },
  {
    path: 'fork-join',
    redirectTo: '404'
  },
  {
    path: 'merge',
    redirectTo: '404'
  },
  {
    path: 'merge-all',
    redirectTo: '404'
  },
  {
    path: 'pairwise',
    redirectTo: '404'
  },
  {
    path: 'race',
    redirectTo: '404'
  },
  {
    path: 'start-with',
    redirectTo: '404'
  },
  {
    path: 'with-latest-from',
    redirectTo: '404'
  },
  {
    path: 'zip',
    redirectTo: '404'
  }
];
