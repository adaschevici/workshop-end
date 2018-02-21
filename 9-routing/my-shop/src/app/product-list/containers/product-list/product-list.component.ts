import { Component, OnInit } from '@angular/core';
import { Product } from '../../models/product.interface';

import { ProductListService } from '../../product-list.service';

import uppercase from '../../../../utils/filters';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products: Product[];
  product: string;

  constructor(
    private router: Router,
    private productService: ProductListService
  ) {
  }

  handleChange(value: string) {
    console.log(value);
    this.product = value;
  }

  handleClick(event: any) {
    console.log(event);
  }

  ngOnInit() {
    this.product = '';
    this.productService
      .getProducts()
      .then((data: Product[]) => {
        console.log(data);
        this.products = data;
      });
  }

  handleRemove(event: Product) {
    console.log(event);
    this.productService
      .removeProduct(event)
      .subscribe((data: Product) => {
        this.products = this.products.filter((product: Product) => {
          return product.id !== event.id;
        });
      });
  }

  handleEdit(event: Product) {
    console.log(event);
    this.productService
      .updateProduct(event)
      .subscribe((data: Product) => {
        console.log(data);
        this.products = this.products.map((product: Product) => {
          if (product.id === event.id) {
            product = Object.assign({}, product, event);
          };
          return product;
        });
      });
  }

  handleView(event: Product) {
    this.router.navigate(['/products', event.id])
  }

  handleBTCFetch(event: any) {
    this.productService
      .getCoinsData()
      .subscribe((data: any) => {
        console.log(data);
      }, (error: any) => console.log('*****', error));
  }

}
