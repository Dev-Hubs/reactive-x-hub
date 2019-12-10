declare var require: any;
const index = require('!raw-loader!./raw/map.ts.text').default;

import { Component, OnInit } from '@angular/core';
import { CustomProject } from 'src/app/sandbox/stackblitz-sdk.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {
  project: CustomProject = {
    files: {
      'index.ts': index
    },
    title: 'map',
    description: 'map desc',
    tags: []
  };

  ngOnInit() {}
}
