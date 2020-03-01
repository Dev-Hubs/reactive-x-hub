import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedOperatorsModule } from '../shared-operators.module';
import { CombineLatestComponent } from './combine-latest/combine-latest.component';
import { ConcatComponent } from './concat/concat.component';
import { ForkJoinComponent } from './fork-join/fork-join.component';
import { JoinCreationComponent } from './join-creation.component';
import { MergeComponent } from './merge/merge.component';
import { RaceComponent } from './race/race.component';
import { ZipComponent } from './zip/zip.component';

@NgModule({
  declarations: [
    JoinCreationComponent,
    CombineLatestComponent,
    ConcatComponent,
    ForkJoinComponent,
    MergeComponent,
    RaceComponent,
    ZipComponent
  ],
  imports: [CommonModule, SharedOperatorsModule]
})
export class JoinCreationModule {}
