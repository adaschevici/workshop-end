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
      quantity: 4,
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

  isEnough(quantity) {
    return quantity > 5 ? 'Enough' : 'Not Enough';
  }

  handleBlur(event: any) {
    console.log(event);
    console.log(this.products[0].quantity);
    this.products[0].quantity = event.target.value;
  }

  handleInput(event: any) {
    console.log(event);
    this.products[0].productName = event.target.value;
  }

  handleClick(event: any) {
    console.log(event);
  }

  ngOnInit() {
  }

}
