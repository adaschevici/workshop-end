import { Component, OnInit, Input, Output, EventEmitter, OnChanges } from '@angular/core';

import { Product } from '../../models/product.interface';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit, OnChanges {
  @Input()
  detail: Product;

  @Output()
  remove: EventEmitter<Product> = new EventEmitter<Product>();

  @Output()
  edit: EventEmitter<Product> = new EventEmitter<Product>();

  @Output()
  view: EventEmitter<Product> = new EventEmitter<Product>();

  editing: boolean = false;

  constructor() { }

  ngOnChanges(changes) {
    console.log(changes);
    if (changes.detail) {
      this.detail = Object.assign({}, changes.detail.currentValue);
    }
  }

  onNameChange(value: string) {
    this.detail.name = value;
  }

  ngOnInit() {
    console.log(this.detail);
  }

  goToProduct() {
    this.view.emit(this.detail);
  }
  
  toggleEdit() {
    if (this.editing) {
      this.edit.emit(this.detail);
    }
    this.editing = !this.editing;
  }

  onRemove() {
    this.remove.emit(this.detail);
  }
}
