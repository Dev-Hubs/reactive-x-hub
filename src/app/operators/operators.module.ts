import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OperatorsRoutingModule } from './operators-routing.module';
import { MapComponent } from './map/map.component';
import { OperatorsComponent } from './operators.component';
import { SandboxModule } from '../sandbox/sandbox.module';


@NgModule({
  imports: [
    CommonModule,
    OperatorsRoutingModule,
    SandboxModule
  ],
  declarations: [MapComponent, OperatorsComponent]
})
export class OperatorsModule { }
