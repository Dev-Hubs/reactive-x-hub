import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SandboxComponent } from './sandbox.component';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [SandboxComponent],
  exports: [SandboxComponent]
})
export class SandboxModule { }
