import { Component } from '@angular/core';
import index from 'raw-loader!./expand.ts.text';
import { CustomProject } from 'src/app/modules/shared/sandbox/stackblitz-sdk.service';

@Component({
  templateUrl: './expand.component.html'
})
export class ExpandComponent {
  project: CustomProject = {
    files: {
      'index.ts': index
    },
    title: 'expand',
    description: '',
    tags: []
  };
}
