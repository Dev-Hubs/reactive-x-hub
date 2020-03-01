import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedOperatorsModule } from '../shared-operators.module';
import { BufferCountComponent } from './buffer-count/buffer-count.component';
import { BufferTimeComponent } from './buffer-time/buffer-time.component';
import { BufferWhenComponent } from './buffer-when/buffer-when.component';
import { BufferComponent } from './buffer/buffer.component';
import { ConcatMapToComponent } from './concat-map-to/concat-map-to.component';
import { ConcatMapComponent } from './concat-map/concat-map.component';
import { ExhaustMapComponent } from './exhaust-map/exhaust-map.component';
import { ExhaustComponent } from './exhaust/exhaust.component';
import { ExpandComponent } from './expand/expand.component';
import { GroupByComponent } from './group-by/group-by.component';
import { MapComponent } from './map/map.component';
import { TransformationComponent } from './transformation.component';

@NgModule({
  declarations: [
    TransformationComponent,
    MapComponent,
    GroupByComponent,
    ExpandComponent,
    BufferCountComponent,
    ExhaustComponent,
    ExhaustMapComponent,
    ConcatMapComponent,
    ConcatMapToComponent,
    BufferComponent,
    BufferWhenComponent,
    BufferTimeComponent
  ],
  imports: [CommonModule, SharedOperatorsModule]
})
export class TransformationModule {}
