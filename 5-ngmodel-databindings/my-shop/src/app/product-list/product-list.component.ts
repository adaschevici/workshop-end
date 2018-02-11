import { Component, OnInit } from '@angular/core';
import { Product } from './models/product.interface';

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
    }, {
      id: 4,
      name: 'Kittens',
      imageUrl: './assets/kittne.jpg',
      quantity: 0,
      inStock: false,
    }, {
      id: 5,
      name: 'Pandas',
      imageUrl: './assets/panda.jpg',
      quantity: 2,
      inStock: true,
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
