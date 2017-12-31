import { createSelector } from '@ngrx/store';
import * as fromRoot from '../../../../app/store';
import * as fromFeature from '../reducers';
import * as fromBooks from '../reducers/books.reducer';

import { Books } from '../../models/books.model';

export interface ProductsState {
  books: fromBooks.BookState;
}

export const getBookState = createSelector(
  fromFeature.getProductsState,
  (state: fromFeature.ProductsState) => state.books
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

export const getSelectedBook = createSelector(
  getBooksEntities,
  fromRoot.getRouterState,
  (entities, router): Books => {
    return router.state && entities[router.state.params['bookId']];
  }
);
