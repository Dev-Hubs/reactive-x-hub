import { Component, OnInit } from '@angular/core';
import index from 'raw-loader!./raw/combine-latest.ts.text';
import { CustomProject } from 'src/app/modules/shared/sandbox/stackblitz-sdk.service';
@Component({
  templateUrl: './combine-latest.component.html'
})
export class CombineLatestComponent implements OnInit {
  project: CustomProject = {
    files: {
      'index.ts': index
    },
    title: 'combineLatest',
    description: 'combineLatest desc',
    tags: []
  };
  constructor() {}

  ngOnInit() {}
}
