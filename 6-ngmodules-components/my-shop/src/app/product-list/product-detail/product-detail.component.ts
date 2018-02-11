import { Component, OnInit, Input } from '@angular/core';

import { Product } from '../models/product.interface';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  @Input()
  detail: Product;
  editing: boolean = false;

  constructor() { }

  ngOnInit() {
    console.log(this.detail);
  }

  onNameChange(value: string) {
    console.log('Value: ', value);
    this.detail.name = value;
  }

  toggleEdit() {
    this.editing = !this.editing;
  }
}
