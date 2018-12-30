declare var require: any;
import { Component, OnInit } from '@angular/core';
import {
  StackblitzSdkService,
  CustomProject
} from 'src/app/sandbox/stackblitz-sdk.service';
const index = require('!raw-loader!./raw/index');
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

  constructor(private sdk: StackblitzSdkService) {
    console.log('hey', index);
  }

  ngOnInit() {}
}
