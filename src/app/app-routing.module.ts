import { MainCountComponent } from './component/main-count/main-count.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SelectComponent } from './component/select/select.component';

const routes: Routes = [
  { path: '', component: SelectComponent },
  {
    path: 'state-manegement-one',
    component: MainCountComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
