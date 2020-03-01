import { Component } from '@angular/core';
import index from 'raw-loader!./concat-map.ts.text';
import { CustomProject } from 'src/app/modules/shared/sandbox/stackblitz-sdk.service';

@Component({
  templateUrl: './concat-map.component.html'
})
export class ConcatMapComponent {
  project: CustomProject = {
    files: {
      'index.ts': index
    },
    title: 'concat map',
    description: '',
    tags: []
  };
}
