import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { combinationRoutes } from './combination/combination-routes';
import { OperatorsComponent } from './operators.component';
import { MapComponent } from './transformation/map/map.component';

export const routes: Routes = [
  {
    path: '',
    component: OperatorsComponent,
    data: { name: 'index' },
    children: [
      {
        path: 'combination',
        children: combinationRoutes
      },
      {
        path: 'conditional',

        children: [
          {
            path: 'default-if-empty',
            redirectTo: '404'
          }
        ]
      },
      {
        path: 'creation',

        children: [
          {
            path: 'ajax',
            redirectTo: '404'
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
            redirectTo: '404'
          }
        ]
      },
      {
        path: 'filtering',
        children: [
          {
            path: 'audit',
            redirectTo: '404'
          }
        ]
      },
      {
        path: 'multicasting',
        children: [
          {
            path: 'multicast',
            redirectTo: '404'
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
            redirectTo: '404'
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
