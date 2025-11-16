import { Component, signal } from '@angular/core';

import { Card } from "../../components/card/card";
import { I18nSelectPipe } from '@angular/common';

const client1 = {
  name: 'Alberto',
  gender: 'male',
  age: 35,
  address: 'Lima, Peru'
}

const client2 = {
  name: 'Teresa',
  gender: 'female',
  age: 38,
  address: 'Tarapoto, Peru'
}

@Component({
  selector: 'app-uncommon-page',
  imports: [Card, I18nSelectPipe],
  templateUrl: './uncommon-page.html'
})
export default class UncommonPage {

  // i18nSelect Pipe
  client = signal(client1);

  salutationMap = {
    male: 'invitarlo',
    female: 'invitarla',
  }

  switchClient() {
    if (this.client() === client1) {
      this.client.set(client2);
      return;
    }

    this.client.set(client1);
  }

}
