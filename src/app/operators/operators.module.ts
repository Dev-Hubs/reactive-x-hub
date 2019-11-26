import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CdkTableModule } from '@angular/cdk/table';

import { OperatorsRoutingModule } from './operators-routing.module';
import { MapComponent } from './map/map.component';
import { OperatorsComponent } from './operators.component';
import { SandboxModule } from '../sandbox/sandbox.module';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatTableModule } from '@angular/material/table';

@NgModule({
  imports: [
    CommonModule,
    OperatorsRoutingModule,
    SandboxModule,
    MatCardModule,
    MatButtonModule,
    MatDividerModule,
    MatTableModule,
    CdkTableModule
  ],
  declarations: [MapComponent, OperatorsComponent]
})
export class OperatorsModule {}
