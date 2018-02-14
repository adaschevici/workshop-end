import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { ProductListModule } from './product-list/product-list.module';
import { ProductViewerComponent } from './product-viewer/product-viewer.component';


@NgModule({
  declarations: [
    AppComponent,
    ProductViewerComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ProductListModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
