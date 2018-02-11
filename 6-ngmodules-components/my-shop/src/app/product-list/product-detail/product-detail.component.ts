import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Product } from '../models/product.interface';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  @Input()
  detail: Product;

  @Output()
  remove2: EventEmitter<any> = new EventEmitter();

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

  onRemove() {
    this.remove2.emit(this.detail);
  }
}
