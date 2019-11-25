import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { OperatorsComponent } from './operators/operators.component';
import { MapComponent } from './operators/map/map.component';

const routes: Routes = [
  { path: '', redirectTo: 'operators/map', pathMatch: 'full' },
  { path: 'operators', component: OperatorsComponent },
  { path: 'operators/map', component: MapComponent }

  // {
  //     path: 'operators',
  //     children: [
  //       { path: 'operators', loadChildren: './operators/operators-routing.module#OperatorsRoutingModule' }
  //     ]
  //   }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
