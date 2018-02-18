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
}