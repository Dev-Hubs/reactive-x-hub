import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavigationComponent } from './navigation/navigation.component';
import { LayoutModule } from '@angular/cdk/layout';
import { CustomMaterialModule } from './material.module';
import { SandboxComponent } from './sandbox/sandbox.component';
import { SanitizePipe } from './pipes/sanitize.pipe';
import { PagesModule } from './pages/pages.module';
import { OperatorsModule } from './operators/operators.module';
import { SandboxModule } from './sandbox/sandbox.module';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    SanitizePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    CustomMaterialModule,
    PagesModule,
    OperatorsModule,
    SandboxModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
