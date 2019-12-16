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
        path: 'transformation',

        children: [
          { path: 'map', component: MapComponent, data: { name: 'map' } }
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
