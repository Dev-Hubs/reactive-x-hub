import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OperatorsComponent } from './operators.component';
import { MapComponent } from './transformation/map/map.component';
import { IndexComponent } from './index/index.component';
import { CombinationCombineAllComponent } from './combination/combine-all/combine-all.component';

export const routes: Routes = [
  {
    path: '',
    component: OperatorsComponent,
    data: { name: 'index' },
    children: [
      {
        path: 'combination',

        children: [
          {
            path: 'combine-all',
            component: CombinationCombineAllComponent
          },
          {
            path: 'combine-latest',
            component: IndexComponent
          },
          {
            path: 'concat',
            component: IndexComponent
          },
          {
            path: 'concat-all',
            component: IndexComponent
          },
          {
            path: 'end-with',
            component: IndexComponent
          },
          {
            path: 'fork-join',
            component: IndexComponent
          },
          {
            path: 'merge',
            component: IndexComponent
          },
          {
            path: 'merge-all',
            component: IndexComponent
          },
          {
            path: 'pairwise',
            component: IndexComponent
          },
          {
            path: 'race',
            component: IndexComponent
          },
          {
            path: 'start-with',
            component: IndexComponent
          },
          {
            path: 'with-latest-from',
            component: IndexComponent
          },
          {
            path: 'zip',
            component: IndexComponent
          }
        ]
      },
      {
        path: 'conditional',

        children: [
          {
            path: 'default-if-empty',
            component: IndexComponent
          }
        ]
      },
      {
        path: 'creation',

        children: [
          {
            path: 'ajax',
            component: IndexComponent
          }
        ]
      },
      {
        path: 'error-handling',
        data: { name: 'Error Handling' },
        children: [
          {
            path: 'catch',
            data: { name: 'catch/catchError' },
            component: IndexComponent
          }
        ]
      },
      {
        path: 'filtering',
        children: [
          {
            path: 'audit',
            component: IndexComponent
          }
        ]
      },
      {
        path: 'multicasting',
        children: [
          {
            path: 'multicast',
            component: IndexComponent
          }
        ]
      },
      {
        path: 'transformation',
        children: [
          { path: 'map', component: MapComponent, data: { name: 'map' } }
        ]
      },
      {
        path: 'utility',
        children: [
          {
            path: 'delay',
            component: IndexComponent
          }
        ]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OperatorsRoutingModule {}
