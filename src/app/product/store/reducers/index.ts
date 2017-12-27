import { ActionReducer } from '@ngrx/store';

import * as fromBooks from './books.reducer';

export interface ProductsState {
    books: fromBooks.BookState
}

export const reducers = {
    books: fromBooks.reducer
};