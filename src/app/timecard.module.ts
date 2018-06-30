import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { TimecardRoutingModule } from './timecard-routing.module';
import { TimecardComponent } from './timecard.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainNavComponent } from './main-nav/main-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule,
         MatTableModule, MatPaginatorModule, MatSortModule } from '@angular/material';
import { TableComponentComponent } from './table-component/table-component.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    TimecardComponent,
    MainNavComponent,
    TableComponentComponent
  ],
  imports: [
    BrowserModule,
    TimecardRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    ServiceWorkerModule.register('/ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [],
  bootstrap: [
    TimecardComponent
  ]
})
export class TimecardModule { }
