import { Http, Response } from '@angular/http';

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { Product } from './models/product.interface';

const PRODUCT_API: string = '/api';

@Injectable()
export class ProductListService {

  constructor(private http: Http) {
    console.log(this.http);
  }

  getProducts(): Observable<Product[]> {
    return this.http
      .get(PRODUCT_API)
      .map((response: Response) => response.json());
  }

  updateProduct(product: Product): Observable<Product> {
    return this.http
      .put(`${PRODUCT_API}/${product.id}`, product)
      .map((response: Response) => response.json());
  }

  removeProduct(product: Product): Observable<Product> {
    return this.http
      .delete(`${PRODUCT_API}/${product.id}`)
      .map((response: Response) => response.json());
  }
}
