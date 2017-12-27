import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { Books } from './models/books.model';

import * as fromStore from './store';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  books: Books[];
  constructor(private store: Store<fromStore.ProductsState>) { }

  ngOnInit() {
    // state of product module
    this.store.select<any>('products').subscribe(
      (state) => {
        console.log(state);
      }
    );
  }

}
