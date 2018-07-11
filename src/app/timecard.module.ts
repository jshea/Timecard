import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ServiceWorkerModule } from '@angular/service-worker';

import { MaterialModule } from './shared/material.module';
import { LayoutModule } from '@angular/cdk/layout';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';

import { environment } from '../environments/environment';

import { TimecardRoutingModule } from './timecard-routing.module';

import { UserService } from './shared/services/user.service';
import { InMemoryDataService } from './shared/services/in-memory-data.service';

import { AccrualComponent } from './components/accrual/accrual.component';
import { AddDialogComponent } from './components/add-dialog/add-dialog.component';
import { AllocationComponent } from './components/allocation/allocation.component';
import { TimecardComponent } from './timecard.component';
import { TimecardInputComponent } from './components/timecard-input/timecard-input.component';
import { WamComponent } from './components/wam/wam.component';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    // After HttpClientModule
    // https://github.com/angular/in-memory-web-api#import-the-in-memory-web-api-module
    InMemoryWebApiModule.forRoot(InMemoryDataService),
    LayoutModule,
    MaterialModule,
    ServiceWorkerModule.register('/ngsw-worker.js', { enabled: environment.production }),
    TimecardRoutingModule
  ],
  declarations: [
    AccrualComponent,
    AddDialogComponent,
    AllocationComponent,
    TimecardComponent,
    TimecardInputComponent,
    WamComponent
  ],
  providers: [ ],
  entryComponents: [
    AddDialogComponent
  ],
  bootstrap: [
    TimecardComponent
  ]
})
export class TimecardModule { }
