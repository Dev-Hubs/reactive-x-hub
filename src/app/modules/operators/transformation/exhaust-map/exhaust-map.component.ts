import { Component } from '@angular/core';
import index from 'raw-loader!./exhaust-map.ts.text';
import { CustomProject } from 'src/app/modules/shared/sandbox/stackblitz-sdk.service';

@Component({
  templateUrl: './exhaust-map.component.html'
})
export class ExhaustMapComponent {
  project: CustomProject = {
    files: {
      'index.ts': index
    },
    title: 'exhaust map',
    description: '',
    tags: []
  };
}
