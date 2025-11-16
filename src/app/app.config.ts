import { ApplicationConfig, LOCALE_ID, provideBrowserGlobalErrorListeners, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { registerLocaleData } from '@angular/common';

import { routes } from './app.routes';
import { LocaleService } from './services/locale.service';

import esPeLocale from '@angular/common/locales/es-PE';
import frLocale from '@angular/common/locales/fr';

registerLocaleData(esPeLocale, 'es-PE');
registerLocaleData(frLocale, 'fr');

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    {
      provide: LOCALE_ID,
      deps: [LocaleService],
      useFactory: (localeService: LocaleService) => localeService.getCurrentLocale()
    }
  ]
};
