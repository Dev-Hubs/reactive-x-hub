import { Component } from '@angular/core';
import index from 'raw-loader!./buffer.ts.text';
import { CustomProject } from 'src/app/modules/shared/sandbox/stackblitz-sdk.service';

@Component({
  templateUrl: './buffer.component.html'
})
export class BufferComponent {
  project: CustomProject = {
    files: {
      'index.ts': index
    },
    title: 'buffer',
    description: '',
    tags: []
  };
}
