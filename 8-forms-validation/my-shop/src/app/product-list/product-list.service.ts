import { Http, Response, Headers, RequestOptions } from '@angular/http';

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/toPromise';

import { Product } from './models/product.interface';

const PRODUCT_API: string = '/api';

@Injectable()
export class ProductListService {

  constructor(private http: Http) {
    console.log(this.http);
  }

  getProducts(): Promise<Product[]> {
    return this.http
      .get(PRODUCT_API)
      .toPromise()
      .then((response: Response) => response.json());
  }

  getProduct(id: number): Observable<Product> {
    return this.http
      .get(`${PRODUCT_API}/${id}`)
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

  getCoinsData(): Observable<any> {
    let headers = new Headers({
      'Content-Type': 'application/json',
      'X-CoinAPI-Key': '<some_free_api_key>',
    });
    let options = new RequestOptions({
      headers: headers,
    });
    return this.http
      .get('https://rest.coinapi.io/v1/exchangerate/BTC', options)
      .map((response: Response) => response.json())
      .catch((error: any) => Observable.throw(error.json()));
  }
}
