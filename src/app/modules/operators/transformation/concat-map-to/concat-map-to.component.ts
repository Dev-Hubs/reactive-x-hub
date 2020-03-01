import { Component } from '@angular/core';
import index from 'raw-loader!./concat-map-to.ts.text';
import { CustomProject } from 'src/app/modules/shared/sandbox/stackblitz-sdk.service';

@Component({
  templateUrl: './concat-map-to.component.html'
})
export class ConcatMapToComponent {
  project: CustomProject = {
    files: {
      'index.ts': index
    },
    title: 'concat map to',
    description: '',
    tags: []
  };
}
