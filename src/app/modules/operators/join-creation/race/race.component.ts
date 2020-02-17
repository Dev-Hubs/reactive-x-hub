import { Component } from '@angular/core';
import index from 'raw-loader!./race.ts.text';
import { CustomProject } from 'src/app/modules/shared/sandbox/stackblitz-sdk.service';

@Component({
  templateUrl: './race.component.html'
})
export class RaceComponent {
  project: CustomProject = {
    files: {
      'index.ts': index
    },
    title: 'race',
    description: '',
    tags: []
  };
}
