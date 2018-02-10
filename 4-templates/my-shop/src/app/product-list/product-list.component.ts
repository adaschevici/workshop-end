import { Component, OnInit } from '@angular/core';
import { Product } from './models/product.interface';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products: Product[];

  constructor() {
    this.products = [{
      id: 1,
      productName: 'Apples',
      imageUrl: './assets/apple.png',
      quantity: 14,
    }, {
      id: 2,
      productName: 'Oranges',
      imageUrl: './assets/orange.jpeg',
      quantity: 14,
    }, {
      id: 3,
      productName: 'Ducks',
      imageUrl: './assets/ducks.jpeg',
      quantity: 14,
    }];
  }

  ngOnInit() {
  }

}
