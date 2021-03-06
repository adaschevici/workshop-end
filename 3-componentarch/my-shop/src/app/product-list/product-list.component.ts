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
      productName: 'Apples',
      imageUrl: './assets/apple.png',
    }, {
      productName: 'Oranges',
      imageUrl: './assets/orange.jpeg',
    }, {
      productName: 'Ducks',
      imageUrl: './assets/ducks.jpeg',
    }];
  }

  ngOnInit() {
  }

}
