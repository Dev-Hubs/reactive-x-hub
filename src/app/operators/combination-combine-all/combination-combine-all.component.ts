import index from 'raw-loader!./raw/combine-all.ts.text';
import { Component, OnInit } from '@angular/core';
import { CustomProject } from 'src/app/sandbox/stackblitz-sdk.service';

@Component({
  selector: 'app-combination-combine-all',
  templateUrl: './combination-combine-all.component.html',
  styleUrls: ['./combination-combine-all.component.scss']
})
export class CombinationCombineAllComponent implements OnInit {
  project: CustomProject = {
    files: {
      'index.ts': index
    },
    title: 'map',
    description: 'map desc',
    tags: []
  };
  constructor() {}

  ngOnInit() {}
}
