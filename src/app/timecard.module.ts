import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { ServiceWorkerModule } from '@angular/service-worker';

import { MaterialModule } from './shared/material.module';
import { LayoutModule } from '@angular/cdk/layout';

import { TimecardRoutingModule } from './timecard-routing.module';

import { environment } from '../environments/environment';
import { AccrualComponent } from './components/accrual/accrual.component';
import { AddDialogComponent } from './components/add-dialog/add-dialog.component';
import { AllocationComponent } from './components/allocation/allocation.component';
import { TableComponentComponent } from './table-component/table-component.component';
import { TimecardComponent } from './timecard.component';
import { TimecardInputComponent } from './components/timecard-input/timecard-input.component';
import { WamComponent } from './components/wam/wam.component';
import { UserService } from './shared/services/user.service';

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
    AccrualComponent,
    AddDialogComponent,
    AllocationComponent,
    TableComponentComponent,
    TimecardComponent,
    TimecardInputComponent,
    WamComponent
  ],
  providers: [
    UserService
  ],
  entryComponents: [
    AddDialogComponent
  ],
  bootstrap: [
    TimecardComponent
  ]
})
export class TimecardModule { }
