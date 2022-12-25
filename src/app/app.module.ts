import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { StoreModule } from '@ngrx/store';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddCountComponent } from './component/add-count/add-count.component';
import { CountComponent } from './component/count/count.component';
import { MainCountComponent } from './component/main-count/main-count.component';
import { SelectComponent } from './component/select/select.component';

@NgModule({
  declarations: [AppComponent, AddCountComponent, CountComponent, MainCountComponent, SelectComponent],
  imports: [BrowserModule, AppRoutingModule, StoreModule.forRoot({})],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
