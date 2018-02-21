import { Component, OnInit } from '@angular/core';
import 'rxjs/add/operator/switchMap';

import { ProductListService } from '../../product-list.service';

import { Product } from '../../models/product.interface';
import { ActivatedRoute, Router, Params } from '@angular/router';

@Component({
  selector: 'app-product-viewer',
  templateUrl: './product-viewer.component.html',
  styleUrls: ['./product-viewer.component.css']
})
export class ProductViewerComponent implements OnInit {

  product: Product;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private productListService: ProductListService
  ) { }

  ngOnInit() {
    this.route.params
      .switchMap((data: Product) => { // switchmap is used to chain and change observables
        console.log(data);
        return this.productListService.getProduct(data.id);
      })
      .subscribe((data: Product) => this.product = data);
  }

  onUpdateProduct(event: Product) {
    this.productListService
      .updateProduct(event)
      .subscribe((data: Product) => {
        this.product = Object.assign({}, this.product, event);
      })
  }

  goBack() {
    this.router.navigate(['/products']);
  }
}
