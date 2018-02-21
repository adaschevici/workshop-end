import { Component } from '@angular/core';

import { Nav } from './models/nav.interface';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title: string;

  nav: Nav[] = [
    {
      link: '/',
      name: 'Home',
      exact: true,
    }, {
      link: '/products',
      name: 'Products',
      exact: false,
    }, {
      link: '/oops',
      name: '404',
      exact: false,
    }
  ]

  constructor() {
    this.title = 'My happy shop';
  }
}
