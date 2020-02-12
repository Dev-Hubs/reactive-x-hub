import { Routes } from '@angular/router';
import { CombineLatestComponent } from './combine-latest/combine-latest.component';
import { ConcatComponent } from './concat/concat.component';
import { JoinCreationComponent } from './join-creation.component';
import { MergeComponent } from './merge/merge.component';
import { ZipComponent } from './zip/zip.component';

export const joinCreationRoutes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: JoinCreationComponent
  },
  {
    path: 'combineLatest',
    component: CombineLatestComponent
  },
  {
    path: 'concat',
    component: ConcatComponent
  },

  {
    path: 'merge',
    component: MergeComponent
  },

  {
    path: 'zip',
    component: ZipComponent
  }
];
