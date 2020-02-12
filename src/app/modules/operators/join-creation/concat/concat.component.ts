import { Component, OnInit } from '@angular/core';
import index from 'raw-loader!./raw/concat.ts.text';
import { CustomProject } from 'src/app/modules/shared/sandbox/stackblitz-sdk.service';

@Component({
  templateUrl: './concat.component.html'
})
export class ConcatComponent implements OnInit {
  project: CustomProject = {
    files: {
      'index.ts': index
    },
    title: 'combineLatest',
    description: 'combineLatest desc',
    tags: []
  };
  constructor() {}

  ngOnInit(): void {}
}
