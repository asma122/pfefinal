import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TacheComponent } from './tache/tache.component';
import { ConsultertacheComponent } from './consultertache/consultertache.component';


const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Icons'
    },
    children: [
      {
        path: 'tache',
       component: TacheComponent,
       data: {
          title: 'tache'
         }
     },
     {
      path: 'consultertache',
     component: ConsultertacheComponent,
     data: {
        title: 'consultertache'
       }
   },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IconsRoutingModule {
}
