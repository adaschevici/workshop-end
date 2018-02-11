import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { ProductListComponent } from './product-list.component';


@NgModule({
  declarations: [
    ProductListComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  exports: [
    ProductListComponent,
  ],
})
export class ProductListModule { }

