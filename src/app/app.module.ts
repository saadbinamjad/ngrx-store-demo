import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { RouterModule, Routes } from "@angular/router";
import { StoreModule } from "@ngrx/store";
import { EffectsModule } from "@ngrx/effects";
import { StoreDevtoolsModule } from "@ngrx/store-devtools";

const appRoutes: Routes = [
  {
    path: "products",
    loadChildren: "./product/product.module#ProductModule"
  }
];

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    StoreModule.forRoot({}, {}),
    RouterModule.forRoot(appRoutes),
    EffectsModule.forRoot([]),
    StoreDevtoolsModule.instrument(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
