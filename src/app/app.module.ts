import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import {
  StoreRouterConnectingModule,
  RouterStateSerializer
} from '@ngrx/router-store';

import { reducers, CustomSerializer } from './store';

const appRoutes: Routes = [
  {
    path: 'products',
    loadChildren: './product/product.module#ProductModule'
  }
];

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    FormsModule,
    StoreModule.forRoot(reducers, {}),
    RouterModule.forRoot(appRoutes),
    EffectsModule.forRoot([]),
    StoreDevtoolsModule.instrument(),
    StoreRouterConnectingModule
  ],
  providers: [
    {
      provide: RouterStateSerializer,
      useClass: CustomSerializer
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
