import * as fromBooks from "../actions/books.action";
import { Books } from "../../models/books.model";

export interface BookState {
  entities: { [id: number]: Books };
  loaded: boolean;
  loading: boolean;
}

export const initialState: BookState = {
  entities: {},
  loaded: false,
  loading: false
};

export function reducer(
  state = initialState,
  action: fromBooks.BooksAction
): BookState {
  switch (action.type) {
    case fromBooks.LOAD_BOOKS: {
      return {
        ...state,
        loading: true
      };
    }
    case fromBooks.LOAD_BOOKS_SUCCESS: {
      const books = action.payload;
      const entities = books.reduce(
        (entities: { [id: number]: Books }, books) => {
          return {
            ...entities,
            [books.id]: books
          };
        },
        {
          ...state.entities
        }
      );

      return {
        ...state,
        loading: false,
        loaded: true,
        entities
      };
    }
    case fromBooks.LOAD_BOOKS_FAIL: {
      return {
        ...state,
        loaded: false,
        loading: false
      };
    }
  }

  return state;
}

export const getBooksLoading = (state: BookState) => state.loading;
export const getBooksLoaded = (state: BookState) => state.loaded;
export const getBooksEntities = (state: BookState) => state.entities;
