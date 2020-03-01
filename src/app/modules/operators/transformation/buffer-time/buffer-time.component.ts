import { Component } from '@angular/core';
import index from 'raw-loader!./buffer-time.ts.text';
import { CustomProject } from 'src/app/modules/shared/sandbox/stackblitz-sdk.service';

@Component({
  templateUrl: './buffer-time.component.html'
})
export class BufferTimeComponent {
  project: CustomProject = {
    files: {
      'index.ts': index
    },
    title: 'buffer time',
    description: '',
    tags: []
  };
}
