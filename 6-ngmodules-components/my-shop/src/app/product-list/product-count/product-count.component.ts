import { Component, OnInit } from '@angular/core';

import { Product } from '../models/product.interface';

@Component({
  selector: 'app-product-count',
  templateUrl: './product-count.component.html',
  styleUrls: ['./product-count.component.css']
})
export class ProductCountComponent implements OnInit {
  items: Product[];

  constructor() { }

  ngOnInit() {
    console.log(this.items);
  }

}
