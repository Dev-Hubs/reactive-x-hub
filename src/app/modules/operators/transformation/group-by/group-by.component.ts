import { Component } from '@angular/core';
import index from 'raw-loader!./group-by.ts.text';
import { CustomProject } from 'src/app/modules/shared/sandbox/stackblitz-sdk.service';

@Component({
  templateUrl: './group-by.component.html'
})
export class GroupByComponent {
  project: CustomProject = {
    files: {
      'index.ts': index
    },
    title: 'group by',
    description: '',
    tags: []
  };
}
