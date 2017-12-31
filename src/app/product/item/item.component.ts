import { Component, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";
import { Observable } from "rxjs/Observable";
import * as fromStore from "../store";
import { Books } from '../models/books.model';

@Component({
  selector: "app-item",
  templateUrl: "./item.component.html",
  styleUrls: ["./item.component.css"]
})
export class ItemComponent implements OnInit {

  selectedBook: any;

  constructor(private store: Store<fromStore.ProductsState>) { }

  ngOnInit() {
    this.store.select(fromStore.getSelectedBook).subscribe((value) => {
      this.selectedBook = value;
    });

  }
}
