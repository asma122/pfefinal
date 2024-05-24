import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OrganisationComponent } from './organisation/organisation.component';


const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Theme',
    },
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'colors',
      },
      {
        path: 'organisation',
       component: OrganisationComponent,
       data: {
          title: ' Organisation'
         }
     },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ThemeRoutingModule {}
