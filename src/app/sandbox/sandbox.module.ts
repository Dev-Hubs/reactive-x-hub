import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SandboxComponent } from './sandbox.component';
import { RangePipe } from '../pipes/range.pipe';
import { MatButtonModule, MatProgressBarModule, MatStepperModule, MatInputModule, MatCardModule } from '@angular/material';
import {MatIconModule} from '@angular/material/icon';
@NgModule({
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule,
    MatProgressBarModule,
    MatStepperModule,
    MatInputModule,
    MatCardModule
  ],
  declarations: [SandboxComponent, RangePipe],
  exports: [SandboxComponent]
})
export class SandboxModule { }
