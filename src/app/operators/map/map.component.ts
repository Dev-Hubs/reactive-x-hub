declare var require: any;
const index = require('!raw-loader!./raw/main.ts.text');
const html = require('!raw-loader!../shared/raw/index.html.text');
const bridge = require('!raw-loader!../shared/raw/bridge.ts.text');

import { Component, OnInit, ViewChild } from '@angular/core';
import { CustomProject } from 'src/app/sandbox/stackblitz-sdk.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {
  @ViewChild('stackblitz') stackblits;
  project: CustomProject = {
    files: {
      'index.ts': index,
      'bridge.ts': bridge,
      'index.html': html
    },
    title: 'map',
    description: 'map desc',
    tags: []
  };

  ngOnInit() {}
}
