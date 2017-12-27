import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs/Observable";
import { catchError } from "rxjs/operators";
import { Books } from "../models/books.model";

@Injectable()
export class BooksService {
  constructor(private http: HttpClient) {}

  getBooks(): Observable<Books[]> {
    return this.http
      .get("http://localhost:3000/books/")
      .pipe(catchError(error => Observable.throw(error)));
  }
}
