import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products: string[];

  constructor() {
    console.info('Constructing the prototype');
    this.products = [
      'Apples', 'Oranges', 'Some other items',
    ];
  }

  ngOnInit() {
    console.info('This gets called after construction');
  }

}
