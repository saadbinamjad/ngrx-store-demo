import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ProductComponent } from './product.component';
import { StoreModule } from '@ngrx/store';
import { reducers } from './store';

export const productRoutes: Routes = [{
  path: '',
  component: ProductComponent
}];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(productRoutes),
    StoreModule.forFeature('products', reducers)

  ],
  declarations: [
    ProductComponent
  ]
})
export class ProductModule { }
