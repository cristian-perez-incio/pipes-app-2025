import { Component, signal } from '@angular/core';
import { TitleCasePipe } from '@angular/common';

import { heroes } from '../../data/heroes.data';
import type { Hero } from '../../interfaces/hero.interface';
import { ToggleCasePipe } from '../../pipes/toggle-case.pipe';
import { CanFlyPipe } from '../../pipes/can-fly.pipe';
import { HeroColorPipe } from '../../pipes/hero-color.pipe';
import { HeroTextColorPipe } from '../../pipes/hero-text-color.pipe';
import { HeroCreatorPipe } from '../../pipes/hero-creator.pipe';
import { HeroSortByPipe } from '../../pipes/hero-sort-by.pipe';
import { HeroFilterPipe } from '../../pipes/hero-filter.pipe';

@Component({
  selector: 'app-custom-page',
  imports: [
    ToggleCasePipe, CanFlyPipe, HeroColorPipe,
    HeroTextColorPipe, HeroCreatorPipe, HeroSortByPipe,
    HeroFilterPipe, TitleCasePipe
  ],
  templateUrl: './custom-page.html'
})
export default class CustomPage {

  name = signal('Cristian Perez');

  capitalized = signal(true);

  heroes = signal(heroes);

  sortBy = signal<keyof Hero | null>(null);

  searchQuery = signal('');

}
