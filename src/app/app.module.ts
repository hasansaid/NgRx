import { CounterReducer } from './store/reducer/counter.reducer';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { StoreModule } from '@ngrx/store';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddCountComponent } from './component/add-count/add-count.component';
import { CountComponent } from './component/count/count.component';
import { MainCountComponent } from './component/main-count/main-count.component';
import { SelectComponent } from './component/select/select.component';
import { NumberControlComponent } from './component/ngrx/number-control/number-control.component';
import { NumberComponent } from './component/ngrx/number/number.component';
import { MainNumberComponent } from './component/ngrx/main-number/main-number.component';
import { HomePageComponent } from './component/ngrx/home-page/home-page.component';
import { NavbarComponent } from './component/ngrx/navbar/navbar.component';
import { MainPageComponent } from './component/ngrx/main-page/main-page.component';

@NgModule({
  declarations: [
    AppComponent,
    AddCountComponent,
    CountComponent,
    MainCountComponent,
    SelectComponent,
    NumberControlComponent,
    NumberComponent,
    MainNumberComponent,
    HomePageComponent,
    NavbarComponent,
    MainPageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({ number: CounterReducer }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
