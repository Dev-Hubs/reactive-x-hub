import { Routes } from '@angular/router';
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

export const transformationRoutes: Routes = [
  { path: '', pathMatch: 'full', component: TransformationComponent },

  { path: 'buffer', component: BufferComponent },
  { path: 'buffer-count', component: BufferCountComponent },
  { path: 'buffer-time', component: BufferTimeComponent },
  { path: 'buffer-when', component: BufferWhenComponent },
  { path: 'concat-map', component: ConcatMapComponent },
  { path: 'concat-map-to', component: ConcatMapToComponent },
  { path: 'exhaust', component: ExhaustComponent },
  { path: 'exhaust-map', component: ExhaustMapComponent },
  { path: 'expand', component: ExpandComponent },
  { path: 'group-by', component: GroupByComponent },
  { path: 'map', component: MapComponent }
];
