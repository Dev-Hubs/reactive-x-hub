import { Component } from '@angular/core';
import index from 'raw-loader!./exhaust.ts.text';
import { CustomProject } from 'src/app/modules/shared/sandbox/stackblitz-sdk.service';

@Component({
  templateUrl: './exhaust.component.html'
})
export class ExhaustComponent {
  project: CustomProject = {
    files: {
      'index.ts': index
    },
    title: 'exhaust',
    description: '',
    tags: []
  };
}
