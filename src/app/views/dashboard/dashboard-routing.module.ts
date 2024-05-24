import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './dashboard.component';
import { DashboardprojetComponent } from './dashboardprojet/dashboardprojet.component';


const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    data: {
      title: $localize`Dashboard`
    }
  },
  {
    path: 'dasproje',
    component: DashboardprojetComponent,
    data: {
      title: 'Dashboard projet',
    },
  },
 

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule {
}
