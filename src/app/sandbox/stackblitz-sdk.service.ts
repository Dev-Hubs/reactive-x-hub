import { Injectable } from '@angular/core';
import sdk from '@stackblitz/sdk';
import { Project } from '@stackblitz/sdk/typings/interfaces';
import { projection } from '@angular/core/src/render3';
export interface CustomProject {
  files: { [path: string]: string };
  title: string;
  description: string;
  tags?: string[];
}

@Injectable({
  providedIn: 'root'
})
export class StackblitzSdkService {
  constructor() {}

  embed(element, project: CustomProject) {
    sdk.embedProject(element, { ...project, template: 'angular-cli' });
  }
}
