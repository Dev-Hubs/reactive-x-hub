import { Injectable } from '@angular/core';
import sdk from '@stackblitz/sdk';
import { Project } from '@stackblitz/sdk/typings/interfaces';
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
    sdk.embedProject(
      element,
      {
        ...project,
        template: 'typescript',
        dependencies: { rxjs: 'latest' },
        settings: {
          compile: {
            trigger: 'auto',
            action: 'refresh',
            clearConsole: false
          }
        }
      },
      { height: 800 }
    );
  }
}
