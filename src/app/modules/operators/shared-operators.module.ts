import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [],
  imports: [SharedModule, MatCardModule, MatDividerModule],
  exports: [SharedModule, MatCardModule, MatDividerModule]
})
export class SharedOperatorsModule {}
