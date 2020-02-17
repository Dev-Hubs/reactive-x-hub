import { Routes } from '@angular/router';
import { CombineLatestComponent } from './combine-latest/combine-latest.component';
import { ConcatComponent } from './concat/concat.component';
import { ForkJoinComponent } from './fork-join/fork-join.component';
import { JoinCreationComponent } from './join-creation.component';
import { MergeComponent } from './merge/merge.component';
import { RaceComponent } from './race/race.component';
import { ZipComponent } from './zip/zip.component';

export const joinCreationRoutes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: JoinCreationComponent
  },
  {
    path: 'combine-latest',
    component: CombineLatestComponent
  },
  {
    path: 'concat',
    component: ConcatComponent
  },
  {
    path: 'fork-join',
    component: ForkJoinComponent
  },

  {
    path: 'merge',
    component: MergeComponent
  },
  {
    path: 'race',
    component: RaceComponent
  },

  {
    path: 'zip',
    component: ZipComponent
  }
];
