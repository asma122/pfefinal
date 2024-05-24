import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProjectlistComponent } from './projectlist/projectlist.component';
import { ListproduitprojetComponent } from './listproduitprojet/listproduitprojet.component';

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Buttons'
    },
    children: [
      // {
      //   path: '',
      //   pathMatch: 'full',
      //   redirectTo: 'buttons'
      // },
      
   {
        path: 'projectlist',
        component: ProjectlistComponent,
        data: {
          title: 'projectlist',
        },
      },  
      {
        path: 'listproduitprojet',
        component: ListproduitprojetComponent,
        data: {
          title: 'listproduitprojet',
        },
      }, 
     

      
    ]
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ButtonsRoutingModule {
}
