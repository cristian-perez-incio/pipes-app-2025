import { Component, signal } from '@angular/core';

import { heroes } from '../../data/heroes.data';
import { ToggleCasePipe } from '../../pipes/toggle-case.pipe';
import { CanFlyPipe } from '../../pipes/can-fly.pipe';
import { HeroColorPipe } from '../../pipes/hero-color.pipe';

@Component({
  selector: 'app-custom-page',
  imports: [ToggleCasePipe, CanFlyPipe, HeroColorPipe],
  templateUrl: './custom-page.html'
})
export default class CustomPage {

  name = signal('Cristian Perez');

  capitalized = signal(true);

  heroes = signal(heroes);

}
