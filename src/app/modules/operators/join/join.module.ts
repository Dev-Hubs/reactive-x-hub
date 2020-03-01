import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedOperatorsModule } from '../shared-operators.module';
import { CombineAllComponent } from './combine-all/combine-all.component';
import { JoinComponent } from './join.component';

@NgModule({
  declarations: [JoinComponent, CombineAllComponent],
  imports: [CommonModule, SharedOperatorsModule]
})
export class JoinModule {}
