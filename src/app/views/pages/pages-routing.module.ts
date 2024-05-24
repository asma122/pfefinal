import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Page404Component } from './page404/page404.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { Page500Component } from './page500/page500.component';
import { PageUrlComponent } from './page-url/page-url.component';
import { FormComponent } from './form/form.component';
import { RegistrationListComponent } from './registration-list/registration-list.component';
import { ProduitComponent } from './produit/produit.component';

import { LoginsuccessComponent } from './loginsuccess/loginsuccess.component';
import { RegistrationComponent } from './registration/registration.component';
import { BrancheComponent } from './branche/branche.component';
import { ListeapplicationComponent } from './listeapplication/listeapplication.component';
import { ListepiplienneComponent } from './listepiplienne/listepiplienne.component';
import { ScanComponent } from './scan/scan.component';

// import { TacheComponent } from './tache/tache.component';




const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },


  {

    path: '404',
    component: Page404Component,
    data: {
      title: 'Page 404'
    }
  },
  { path: 'registration', component: RegistrationComponent },

  { path: 'loginsuccess', component: LoginsuccessComponent },
  {
    path: '500',
    component: Page500Component,
    data: {
      title: 'Page 500'
    }
  },
  {
    path: 'login',
    component: LoginComponent,
    data: {
      title: 'Login Page'
    }
  },
  {
    path: 'URL',
    component: PageUrlComponent,
  },
  // {
  //   path: 'tache',
  //   component: TacheComponent,
  // },
  {
    path: 'form',
    component: FormComponent,
  },
  {
    path: 'produit',
    component: ProduitComponent,
  },
  // {
  //   path: 'project',
  //   component: ProjectComponent,
  // },

  {
    path: 'rgl',
    component: RegistrationListComponent,
    data: {
      title: 'Page register'
    }
  },
  {
    path: 'listeapplication',
    component: ListeapplicationComponent,
  
  },
  {
    path: 'scan',
    component: ScanComponent,
  
  },
  {
    path: 'listepiplienne',
    component: ListepiplienneComponent,
  
  },
  {
    path: 'register',
    component: RegisterComponent,
    data: {
      title: 'Register Page'
    }
  },
  {
    path: 'branche',
    component: BrancheComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule {
}
