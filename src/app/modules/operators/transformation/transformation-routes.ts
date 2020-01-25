import { Routes } from '@angular/router';
import { MapComponent } from './map/map.component';

export const transformationRoutes: Routes = [
  {
    path: 'transformation',
    children: [{ path: 'map', component: MapComponent, data: { name: 'map' } }]
  }
];
