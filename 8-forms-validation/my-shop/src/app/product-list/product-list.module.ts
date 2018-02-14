import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';


import { ProductListComponent } from './product-list.component';
import { ProductViewerComponent } from '../product-viewer/product-viewer.component';

import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductCountComponent } from './product-count/product-count.component';

import { ProductListService } from './product-list.service';

@NgModule({
  declarations: [
    ProductListComponent,
    ProductViewerComponent,
    ProductDetailComponent,
    ProductCountComponent,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
  ],
  exports: [
  // ProductListComponent,
    ProductViewerComponent,
  ],
  providers: [
    ProductListService,
  ],
})
export class ProductListModule { }

