import {
  ActionReducer,
  createFeatureSelector,
  createSelector
} from "@ngrx/store";

import * as fromBooks from "./books.reducer";

export interface ProductsState {
  books: fromBooks.BookState;
}

export const reducers = {
  books: fromBooks.reducer
};

export const getProductsState = createFeatureSelector<ProductsState>(
  "products"
);

// book BookState

export const getBookState = createSelector(
  getProductsState,
  (state: ProductsState) => state.books
);

export const getBooksEntities = createSelector(
  getBookState,
  fromBooks.getBooksEntities
);
export const getAllBooks = createSelector(getBooksEntities, entities => {
  return Object.keys(entities).map(id => entities[id]);
});
export const getBooksLoaded = createSelector(
  getBookState,
  fromBooks.getBooksLoaded
);
export const getBooksLoading = createSelector(
  getBookState,
  fromBooks.getBooksLoading
);
