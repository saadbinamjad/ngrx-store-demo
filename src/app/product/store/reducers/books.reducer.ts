import * as fromBooks from '../actions/books.action';
import { Books } from '../../models/books.model';

export interface BookState {
    data: Books[];
    loaded: boolean;
    loading: boolean;
}

export const initialState: BookState = {
    data: [{
        "id": 1,
        "name": "Batman"
    },
    {
        "id": "2",
        "name": "Captain America"
    },
    {
        "name": "Superman",
        "id": 3
    }],
    loaded: false,
    loading: false
}

export function reducer(state = initialState,
    action: fromBooks.BooksAction): BookState {
    switch (action.type) {
        case fromBooks.LOAD_BOOKS: {
            return {
                ...state,
                loading: true
            };
        }
        case fromBooks.LOAD_BOOKS_SUCCESS: {
            return {
                ...state,
                loading: false,
                loaded: true
            }
        }
        case fromBooks.LOAD_BOOKS_FAIL: {
            return {
                ...state,
                loaded: false,
                loading: false
            }
        }

    }

    return state;
}

export const getBooksLoading = (state: BookState) => state.loading;
export const getBooksLoaded = (state: BookState) => state.loaded;
export const getBooks = (state: BookState) => state.data;

