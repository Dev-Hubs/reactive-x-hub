import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DecisionTreeRoutingModule } from './decision-tree-routing.module';
import { DecisionTreeComponent } from './decision-tree.component';
import { MatTreeModule } from '@angular/material/tree';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
@NgModule({
  declarations: [DecisionTreeComponent],
  imports: [
    CommonModule,
    MatTreeModule,
    DecisionTreeRoutingModule,
    MatIconModule,
    MatButtonModule
  ]
})
export class DecisionTreeModule {}
