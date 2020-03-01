import { Component, OnInit } from '@angular/core';
import index from 'raw-loader!./fork-join.ts.text';
import { CustomProject } from 'src/app/modules/shared/sandbox/stackblitz-sdk.service';

@Component({
  templateUrl: './fork-join.component.html'
})
export class ForkJoinComponent implements OnInit {
  project: CustomProject = {
    files: {
      'index.ts': index
    },
    title: 'forkJoin',
    description: '',
    tags: []
  };
  constructor() {}

  ngOnInit(): void {}
}
