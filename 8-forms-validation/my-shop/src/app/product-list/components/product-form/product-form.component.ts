import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

import { Product } from '../../models/product.interface';
import { Provider } from '../../models/providers.interface';

@Component({
    selector: 'app-product-form',
    styleUrls: ['./product-form.component.css'],
    templateUrl: './product-form.component.html'
})
export class ProductFormComponent {

    @Input()
    detail: Product;

    @Output()
    update: EventEmitter<any> = new EventEmitter();

    providers: Provider[] = [{
      key: 'none',
      value: 'No provider',
    }, {
      key: 'star-shop',
      value: 'Star Shop',
    }, {
      key: 'rainbow-shop',
      value: 'Rainbow Shop',
    }, {
      key: 'unicorn-shop',
      value: 'Unicorn Shop',
    }];
    constructor() {}

    ngOnInit() {

    }

    toggleInStock(inStock: boolean) {
        if (inStock) {
            this.detail.lastRenewed = Date.now();
        } else {
            this.detail.quantity = 0;
        }
        this.detail.inStock = inStock;
    }

    restockProduct(quantity: number) {
        this.detail.quantity = quantity;
    }

    handleSubmit(product: Product, isValid: boolean) {
        if (isValid) {

        }
    }
}
