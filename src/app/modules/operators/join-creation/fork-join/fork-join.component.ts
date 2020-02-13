import { Component, OnInit } from '@angular/core';
import index from 'raw-loader!./raw/fork-join.ts.text';
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
    description: 'forkJoin desc',
    tags: []
  };
  constructor() {}

  ngOnInit(): void {}
}
