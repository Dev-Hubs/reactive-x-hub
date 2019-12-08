import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OperatorsComponent } from './operators.component';
import { MapComponent } from './map/map.component';
import { IndexComponent } from './index/index.component';

const routes: Routes = [
  {
    path: '',
    component: OperatorsComponent,
    children: [
      { path: '', component: IndexComponent },
      { path: 'map', component: MapComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OperatorsRoutingModule {}
