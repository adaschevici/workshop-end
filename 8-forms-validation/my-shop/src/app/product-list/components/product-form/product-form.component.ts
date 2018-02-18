import { Component, Input, OnInit } from '@angular/core';

import { Product } from '../../models/product.interface';

@Component({
    selector: 'app-product-form',
    styleUrls: ['./product-form.component.css'],
    templateUrl: './product-form.component.html'
})
export class ProductFormComponent {
    
    @Input()
    detail: Product;

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
}