import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

// containers
import { ProductListComponent } from './containers/product-list/product-list.component';
import { ProductViewerComponent } from './containers/product-viewer/product-viewer.component';

// components
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { ProductCountComponent } from './components/product-count/product-count.component';
import { ProductFormComponent } from './components/product-form/product-form.component';


// services
import { ProductListService } from './product-list.service';


const routes = [
  {
    path: 'products',
    children: [
      { path: '', component: ProductListComponent },
      { path: ':id', component: ProductViewerComponent },
    ],
  }
];
@NgModule({
  declarations: [
    ProductListComponent,
    ProductViewerComponent,
    ProductDetailComponent,
    ProductCountComponent,
    ProductFormComponent,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    RouterModule.forChild(routes),
  ],
  providers: [
    ProductListService,
  ],
})
export class ProductListModule { }

