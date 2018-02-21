import { Component, OnInit } from '@angular/core';

import { ProductListService } from '../../product-list.service';

import { Product } from '../../models/product.interface';

@Component({
  selector: 'app-product-viewer',
  templateUrl: './product-viewer.component.html',
  styleUrls: ['./product-viewer.component.css']
})
export class ProductViewerComponent implements OnInit {

  product: Product;

  constructor(private productListService: ProductListService) { }

  ngOnInit() {
    this.productListService
      .getProduct(1)
      .subscribe((data: Product) => this.product = data);
  }

  onUpdateProduct(event: Product) {
    this.productListService
      .updateProduct(event)
      .subscribe((data: Product) => {
        this.product = Object.assign({}, this.product, event);
      })
  }
}
