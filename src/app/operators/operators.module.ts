import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CdkTableModule } from '@angular/cdk/table';

import { OperatorsRoutingModule } from './operators-routing.module';
import { MapComponent } from './transformation/map/map.component';
import { OperatorsComponent } from './operators.component';
import { SandboxModule } from '../sandbox/sandbox.module';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatTableModule } from '@angular/material/table';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { IndexComponent } from './index/index.component';
import { CombinationCombineAllComponent } from './combination/combine-all/combine-all.component';
@NgModule({
  imports: [
    CommonModule,
    OperatorsRoutingModule,
    SandboxModule,
    MatCardModule,
    MatButtonModule,
    MatDividerModule,
    MatTableModule,
    CdkTableModule,
    MatSidenavModule,
    MatListModule
  ],
  declarations: [
    MapComponent,
    OperatorsComponent,
    IndexComponent,
    CombinationCombineAllComponent
  ]
})
export class OperatorsModule {}
