import { Component } from '@angular/core';
import index from 'raw-loader!./buffer-count.ts.text';
import { CustomProject } from 'src/app/modules/shared/sandbox/stackblitz-sdk.service';

@Component({
  templateUrl: './buffer-count.component.html'
})
export class BufferCountComponent {
  project: CustomProject = {
    files: {
      'index.ts': index
    },
    title: 'buffer count',
    description: '',
    tags: []
  };
}
