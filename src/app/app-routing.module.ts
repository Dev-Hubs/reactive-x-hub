import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'operators',
    loadChildren: () =>
      import('./operators/operators.module').then(m => m.OperatorsModule)
  },
  {
    path: 'decision-tree',
    loadChildren: () =>
      import('./modules/decision-tree/decision-tree.module').then(
        m => m.DecisionTreeModule
      )
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
