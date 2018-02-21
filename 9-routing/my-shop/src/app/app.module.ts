import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';


import { AppComponent } from './app.component';
import { HomeComponent } from './home.component';
import { NotFoundComponent } from './not-found.component';

import { ProductListModule } from './product-list/product-list.module';

const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: '**', component: NotFoundComponent, pathMatch: 'full' },
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NotFoundComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ProductListModule,
    RouterModule.forRoot(routes, { useHash: true }), // for supporting older browsers
    // prevents benefits of server side rendering
    // based on pushLocation based strategy
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
