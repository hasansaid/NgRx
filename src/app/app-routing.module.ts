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
  { path: 'ngrx-page', component: MainNumberComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
