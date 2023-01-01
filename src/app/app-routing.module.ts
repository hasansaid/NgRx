import { AddProductComponent } from './component/ngrx/add-product/add-product.component';
import { MainPageComponent } from './component/ngrx/main-page/main-page.component';
import { HomePageComponent } from './component/ngrx/home-page/home-page.component';
import { MainNumberComponent } from './component/ngrx/main-number/main-number.component';
import { MainCountComponent } from './component/main-count/main-count.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SelectComponent } from './component/select/select.component';

const routes: Routes = [
  { path: '', component: SelectComponent },
  {
    path: 'others-page',
    component: MainCountComponent,
  },
  {
    path: 'ngrx-page',
    component: MainPageComponent,
    children: [
      { path: '', component: HomePageComponent },
      { path: 'home-page', component: HomePageComponent },
      { path: 'add-product', component: AddProductComponent },
      { path: 'home-page/add-product', component: AddProductComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
