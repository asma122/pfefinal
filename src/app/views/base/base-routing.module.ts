import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductlistComponent } from './productlist/productlist.component';
const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Base',
    },
    children: [
      // {
      //   path: '',
      //   pathMatch: 'full',
      //   redirectTo: 'cards',
      // },
      {
        path: 'productlist',
        component: ProductlistComponent,
        data: {
          title: 'productlist',
        },
      },
     
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BaseRoutingModule {}

