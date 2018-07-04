import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

// https://material.angular.io/guide/getting-started#step-5-gesture-support
import 'hammerjs';

import { TimecardModule } from './app/timecard.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(TimecardModule)
  .catch(err => console.log(err));
