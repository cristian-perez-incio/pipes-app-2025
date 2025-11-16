import { Injectable, signal } from '@angular/core';

export type SupportedLocale = 'es-PE' | 'fr' | 'en';

@Injectable({ providedIn: 'root' })
export class LocaleService {

  private currentLocale = signal<SupportedLocale>('es-PE');

  constructor() {
    this.currentLocale.set(
      (localStorage.getItem('currentLocale') as SupportedLocale) ?? 'es-PE'
    );
  }

  getCurrentLocale() {
    return this.currentLocale();
  }

  setCurrentLocale(currentLocale: SupportedLocale) {
    localStorage.setItem('currentLocale', currentLocale);
    this.currentLocale.set(currentLocale);
    window.location.reload();
  }

}
