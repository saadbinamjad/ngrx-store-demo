import { ActionReducerMap, createFeatureSelector } from "@ngrx/store";

import * as fromBooks from "./books.reducer";

export interface ProductsState {
  books: fromBooks.BookState;
}

export const reducers: ActionReducerMap<ProductsState, any, any> = {
  books: fromBooks.reducer
};

export const getProductsState = createFeatureSelector<ProductsState>(
  "products"
);
