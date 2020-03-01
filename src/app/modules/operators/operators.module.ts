import { CdkTableModule } from '@angular/cdk/table';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatTableModule } from '@angular/material/table';
import { SharedModule } from '../shared/shared.module';
import { CombinationComponent } from './combination/combination.component';
import { JoinCreationModule } from './join-creation/join-creation.module';
import { JoinModule } from './join/join.module';
import { OperatorsRoutingModule } from './operators-routing.module';
import { OperatorsComponent } from './operators.component';
import { TransformationModule } from './transformation/transformation.module';

@NgModule({
  imports: [
    CommonModule,
    OperatorsRoutingModule,
    SharedModule,
    MatCardModule,
    MatButtonModule,
    MatDividerModule,
    MatTableModule,
    CdkTableModule,
    MatSidenavModule,
    MatListModule,
    TransformationModule,
    JoinCreationModule,
    JoinModule
  ],
  declarations: [OperatorsComponent, CombinationComponent]
})
export class OperatorsModule {}
