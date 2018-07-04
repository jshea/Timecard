import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { MaterialModule } from './shared/material.module';

import { TimecardRoutingModule } from './timecard-routing.module';
import { TimecardComponent } from './timecard.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainNavComponent } from './main-nav/main-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { TableComponentComponent } from './table-component/table-component.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    LayoutModule,
    MaterialModule,
    ServiceWorkerModule.register('/ngsw-worker.js', { enabled: environment.production }),
    TimecardRoutingModule
  ],
  declarations: [
    TimecardComponent,
    MainNavComponent,
    TableComponentComponent
  ],
  providers: [],
  bootstrap: [
    TimecardComponent
  ]
})
export class TimecardModule { }
