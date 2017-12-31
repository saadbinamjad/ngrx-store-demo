import { Injectable } from '@angular/core';
import { Effect, Actions } from '@ngrx/effects';
import { of } from 'rxjs/observable/of';
import { switchMap, map, catchError } from 'rxjs/operators';
import * as fromServices from '../../services/books.service';
import * as booksActions from '../actions/books.action';

@Injectable()
export class BooksEffects {
  constructor(
    private actions$: Actions<any, any>,
    private bookService: fromServices.BooksService
  ) {}

  @Effect()
  loadBooks$ = this.actions$.ofType(booksActions.LOAD_BOOKS).pipe(
    switchMap(() => {
      return this.bookService
        .getBooks()
        .pipe(
          map(books => new booksActions.LoadBooksSuccess(books)),
          catchError(error => of(new booksActions.LoadBooksFail(error)))
        );
    })
  );

  @Effect()
  createBooks$ = this.actions$.ofType(booksActions.CREATE_BOOKS).pipe(
    map((action: booksActions.CreateBooks) => action.payload),
    switchMap(book => {
      return this.bookService
        .createBook(book)
        .pipe(
          map(book => new booksActions.CreateBooksSuccess(book)),
          catchError(error => of(new booksActions.CREATE_BOOKS_FAIL(error)))
        );
    })
  );
}
