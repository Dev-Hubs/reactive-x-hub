import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OperatorsComponent } from './operators.component';
import { MapComponent } from './map/map.component';
import { IndexComponent } from './index/index.component';
import { CombinationCombineAllComponent } from './combination-combine-all/combination-combine-all.component';

export const routes: Routes = [
  {
    path: '',
    component: OperatorsComponent,
    data: { name: 'index' },
    children: [
      {
        path: 'combination',
        data: { name: 'Combination' },
        children: [
          {
            path: 'combine-all',
            component: CombinationCombineAllComponent,
            data: { name: 'combineAll' }
          }
        ]
      },
      {
        path: 'transformation',
        data: { name: 'Transformation' },
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
