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

}
