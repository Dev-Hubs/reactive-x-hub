import { Component } from '@angular/core';
import index from 'raw-loader!./buffer-when.ts.text';
import { CustomProject } from 'src/app/modules/shared/sandbox/stackblitz-sdk.service';

@Component({
  templateUrl: './buffer-when.component.html'
})
export class BufferWhenComponent {
  project: CustomProject = {
    files: {
      'index.ts': index
    },
    title: 'buffer when',
    description: '',
    tags: []
  };
}
