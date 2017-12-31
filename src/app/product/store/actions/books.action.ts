import { Action } from '@ngrx/store';
import { Books } from '../../models/books.model';

// Consts
export const LOAD_BOOKS = '[Products] Load Books';
export const LOAD_BOOKS_FAIL = '[Products] Load Books Failed';
export const LOAD_BOOKS_SUCCESS = '[Products] Load Books Success';

export const CREATE_BOOKS = '[Products] Create Books';
export const CREATE_BOOKS_FAIL = '[Products] Create Books Failed';
export const CREATE_BOOKS_SUCCESS = '[Products] Create Books Success';

// Creators

export class LoadBooks implements Action {
  readonly type = LOAD_BOOKS;
}

export class LoadBooksFail implements Action {
  readonly type = LOAD_BOOKS_FAIL;
  public constructor(public payload: any) {}
}

export class LoadBooksSuccess implements Action {
  readonly type = LOAD_BOOKS_SUCCESS;
  public constructor(public payload: any) {}
}

export class CreateBooks implements Action {
  readonly type = CREATE_BOOKS;
  constructor(public payload: Books) {}
}

export class CreateBooksFail implements Action {
  readonly type = CREATE_BOOKS_FAIL;
  public constructor(public payload: any) {}
}

export class CreateBooksSuccess implements Action {
  readonly type = CREATE_BOOKS_SUCCESS;
  public constructor(public payload: any) {}
}

// Action Types

export type BooksAction =
  | LoadBooks
  | LoadBooksFail
  | LoadBooksSuccess
  | CreateBooks
  | CreateBooksSuccess
  | CreateBooksFail;
