import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailComponent } from './pages/product/detail/detail.component';
import { ProductComponent } from './pages/product/product.component';
import { StoresComponent } from './pages/stores/stores.component';

const routes: Routes = [
  { path: '', redirectTo: 'stores', pathMatch: 'full' },
  { path: 'stores', component: StoresComponent },
  { path: 'product', children: [
    { path: '', component: ProductComponent },
    { path: ':id', component: DetailComponent }
  ] },
  { path: '**', redirectTo: 'stores' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
