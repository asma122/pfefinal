import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { ToastersComponent } from './toasters/toasters.component';

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Notifications'
    },
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'badges'
      },
     
      {
        path: 'toasts',
        component: ToastersComponent,
        data: {
          title: 'Toasts'
        }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NotificationsRoutingModule {
}
