import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from "@angular/router";

import { routes } from '../../app.routes';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './navbar.html'
})
export class Navbar {

  routes = routes.map(route => ({
    title: route.title ?? '',
    path: route.path ?? ''
  }))

}
