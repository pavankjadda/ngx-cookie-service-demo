import './polyfills';

import { importProvidersFrom } from '@angular/core';

import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { CommonModule } from '@angular/common';

bootstrapApplication(AppComponent, {
  providers: [importProvidersFrom(CommonModule)],
})
  .then((ref) => {
    // Ensure Angular destroys itself on hot reloads.
    if (window['ngRef']) {
      window['ngRef'].destroy();
    }
    window['ngRef'] = ref;

    // Otherwise, log the boot error
  })
  .catch((err) => console.error(err));
