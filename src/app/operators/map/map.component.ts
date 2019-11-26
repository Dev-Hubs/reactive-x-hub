declare var require: any;
const index = require('!raw-loader!./raw/map.ts.text').default;
const html = require('!raw-loader!../shared/raw/index.html').default;
const bridge = require('!raw-loader!../shared/raw/bridge.ts.text').default;
const helpers = require('!raw-loader!../shared/raw/helpers.ts.text').default;
const facade = require('!raw-loader!../shared/raw/facade.ts.text').default;
const event = require('!raw-loader!../shared/raw/event.ts.text').default;

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
