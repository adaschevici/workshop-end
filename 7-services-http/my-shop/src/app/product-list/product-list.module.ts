import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { ProductListComponent } from './product-list.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductCountComponent } from './product-count/product-count.component';

import { ProductListService } from './product-list.service';

@NgModule({
  declarations: [
    ProductListComponent,
    ProductDetailComponent,
    ProductCountComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  exports: [
    ProductListComponent,
  ],
  providers: [
    ProductListService,
  ],
})
export class ProductListModule { }

