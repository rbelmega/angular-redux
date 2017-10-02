import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import {
  StoreRouterConnectingModule,
  RouterStateSerializer,
} from '@ngrx/router-store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { reducers, metaReducers } from './reducers';

import { AppComponent } from './app.component';
import { DemoComponent } from './components/demo/demo.component';
import { DemoService } from './components/demo/demo.service';

import { AppRoutingModule } from './app-routing.module';


@NgModule({
  declarations: [
    AppComponent,
    DemoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot(reducers, { metaReducers }),
    StoreRouterConnectingModule,
    StoreDevtoolsModule.instrument({
      maxAge: 25,
    }),
  ],
  providers: [
    DemoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
