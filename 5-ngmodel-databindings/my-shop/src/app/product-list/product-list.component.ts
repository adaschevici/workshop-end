import { Component, OnInit } from '@angular/core';
import { Product } from './models/product.interface';

import uppercase from '../../utils/filters';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products: Product[];
  product: string;

  constructor() {
    this.product = '';
    this.products = [{
      id: 1,
      name: 'Apples',
      imageUrl: './assets/apple.png',
      quantity: 4,
      inStock: true,
      lastRenewed: 1518092805000,
    }, {
      id: 2,
      name: 'Oranges',
      imageUrl: './assets/orange.jpeg',
      quantity: 14,
      inStock: true,
    }, {
      id: 3,
      name: 'Ducks',
      imageUrl: './assets/ducks.jpeg',
      quantity: 14,
      inStock: true,
      lastRenewed: 1517142561000,
    }, {
      id: 4,
      name: 'Kittens',
      imageUrl: './assets/kitten.jpg',
      quantity: 0,
      inStock: false,
    }, {
      id: 5,
      name: 'Tweeties',
      imageUrl: './assets/tweety.png',
      quantity: 2,
      inStock: true,
      lastRenewed: 1518179401000,
    }];
  }

  handleChange(value: string) {
    console.log(value);
    this.product = value;
  }

  handleClick(event: any) {
    console.log(event);
  }

  ngOnInit() {
  }

}
