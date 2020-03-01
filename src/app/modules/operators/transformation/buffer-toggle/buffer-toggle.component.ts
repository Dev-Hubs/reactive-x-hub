import { Component } from '@angular/core';
import index from 'raw-loader!./buffer-toggle.ts.text';
import { CustomProject } from 'src/app/modules/shared/sandbox/stackblitz-sdk.service';

@Component({
  templateUrl: './buffer-toggle.component.html'
})
export class BufferToggleComponent {
  project: CustomProject = {
    files: {
      'index.ts': index
    },
    title: 'buffer toggle',
    description: '',
    tags: []
  };
}
