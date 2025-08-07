import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DateComponent } from './date/date.component';
import { ProductComponent } from './product/product.component';
const routes: Routes = [
  { path: "", component: ProductComponent },
  { path: "date", component: DateComponent },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
