import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { ServiceWorkerModule } from '@angular/service-worker';

import { MaterialModule } from './shared/material.module';
import { LayoutModule } from '@angular/cdk/layout';

import { TimecardRoutingModule } from './timecard-routing.module';

import { environment } from '../environments/environment';
import { AddDialogComponent } from './components/add-dialog/add-dialog.component';
import { TableComponentComponent } from './table-component/table-component.component';
import { TimecardComponent } from './timecard.component';

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
    AddDialogComponent,
    TimecardComponent,
    TableComponentComponent
  ],
  providers: [],
  entryComponents: [
    AddDialogComponent
  ],
  bootstrap: [
    TimecardComponent
  ]
})
export class TimecardModule { }
