declare var require: any;
const index = require('!raw-loader!./raw/map.ts.text');
const html = require('!raw-loader!../shared/raw/index.html');
const bridge = require('!raw-loader!../shared/raw/bridge.ts.text');
const helpers = require('!raw-loader!../shared/raw/helpers.ts.text');
const facade = require('!raw-loader!../shared/raw/facade.ts.text');
const event = require('!raw-loader!../shared/raw/event.ts.text');

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
      'index.html': html,
      'helpers.ts': helpers,
      'facade.ts': facade,
      'event.ts': event
    },
    title: 'map',
    description: 'map desc',
    tags: []
  };

  ngOnInit() {}
}
