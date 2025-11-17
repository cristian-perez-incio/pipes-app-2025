import { Component, signal } from '@angular/core';
import { I18nPluralPipe, I18nSelectPipe, SlicePipe } from '@angular/common';

import { Card } from "../../components/card/card";

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
  imports: [Card, I18nSelectPipe, I18nPluralPipe, SlicePipe],
  templateUrl: './uncommon-page.html'
})
export default class UncommonPage {

  // i18nSelect Pipe
  client = signal(client1);

  salutationMap = {
    male: 'invitarlo',
    female: 'invitarla',
  };

  switchClient() {
    if (this.client() === client1) {
      this.client.set(client2);
      return;
    }

    this.client.set(client1);
  }

  // i18nPlural Pipe
  clientsMap = {
    '=0': 'ningún cliente está esperando',
    '=1': 'un solo cliente está esperando',
    other: 'hay # clientes esperando'
  };

  clients = signal([
    'Norma', 'Julio',
    'Carlos', 'Andrea',
    'Viviana', 'Daniel',
    'Lorena', 'Fabrizio',
    'Esmeralda', 'Pablo'
  ]);

  deleteClient() {
    this.clients.update(prev => prev.slice(1));
  }

}
