import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule, Routes } from "@angular/router";
import { ProductComponent } from "./product.component";
import { StoreModule } from "@ngrx/store";
import { reducers, effects } from "./store";
import { BooksService } from "./services/books.service";
import { HttpClientModule } from "@angular/common/http";
import { EffectsModule } from "@ngrx/effects";
import { ItemComponent } from './item/item.component';

export const productRoutes: Routes = [
  {
    path: "",
    component: ProductComponent
  },
  {
    path: "new",
    component: ItemComponent
  },
  {
    path: ":bookId",
    component: ItemComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule.forChild(productRoutes),
    StoreModule.forFeature("products", reducers),
    EffectsModule.forFeature(effects),
  ],
  declarations: [ProductComponent, ItemComponent],
  providers: [BooksService]
})
export class ProductModule {}
