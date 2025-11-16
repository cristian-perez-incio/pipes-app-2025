import { DatePipe, LowerCasePipe, TitleCasePipe, UpperCasePipe } from '@angular/common';
import { Component, effect, inject, signal } from '@angular/core';

import { LocaleService, SupportedLocale } from '../../services/locale.service';

@Component({
  selector: 'app-basic-page',
  imports: [LowerCasePipe, UpperCasePipe, TitleCasePipe, DatePipe],
  templateUrl: './basic-page.html'
})
export default class BasicPage {

  localeService = inject(LocaleService);

  lowercaseName = signal('cristian');
  uppercaseName = signal('CRISTIAN');
  fullName = signal('cRisTIaN pEReZ');

  customDate = signal(new Date());

  tickingDateEffect = effect((onCleanup) => {
    const interval = setInterval(() => {
      this.customDate.set(new Date());
    }, 1000);

    onCleanup(() => {
      clearInterval(interval);
    });
  });

  switchLocale(locale: SupportedLocale) {
    this.localeService.setCurrentLocale(locale);
  }

}
