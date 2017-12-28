import { Action } from '@ngrx/store';


// Consts
export const LOAD_BOOKS = '[Products] Load Books';
export const LOAD_BOOKS_FAIL = '[Products] Load Books Failed';
export const LOAD_BOOKS_SUCCESS = '[Products] Load Books Success';

// Creators

export class LoadBooks implements Action {
    readonly type = LOAD_BOOKS;
}

export class LoadBooksFail implements Action {
    readonly type = LOAD_BOOKS_FAIL;
    public constructor(public payload: any) { }
}

export class LoadBooksSuccess implements Action {
    readonly type = LOAD_BOOKS_SUCCESS;
    public constructor(public payload: any) { }
}

// Action Types

export type BooksAction = LoadBooks | LoadBooksFail | LoadBooksSuccess;
