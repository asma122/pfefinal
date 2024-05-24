import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesRoutingModule } from './pages-routing.module';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { Page404Component } from './page404/page404.component';
import { ButtonModule, CardModule, FormModule, GridModule } from '@coreui/angular';
import { PageUrlComponent } from './page-url/page-url.component';
import { Page500Component } from './page500/page500.component';
import { IconModule } from '@coreui/icons-angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormComponent } from './form/form.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { RegistrationListComponent } from './registration-list/registration-list.component';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';

// import { TacheComponent } from './tache/tache.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { ProduitComponent } from './produit/produit.component';
import { LoginsuccessComponent } from './loginsuccess/loginsuccess.component';
import { RegistrationComponent } from './registration/registration.component';
import { BrancheComponent } from './branche/branche.component';
import { ListeapplicationComponent } from './listeapplication/listeapplication.component';
import { ListepiplienneComponent } from './listepiplienne/listepiplienne.component';
import { ScanComponent } from './scan/scan.component';







@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    Page404Component,
    PageUrlComponent,
    Page500Component,
    FormComponent,
    RegistrationListComponent,
    ProduitComponent,
    LoginsuccessComponent,
    RegistrationComponent,
    BrancheComponent,
    ListeapplicationComponent,
    ListepiplienneComponent,
    ScanComponent,
  
    // TacheComponent,
   
    

    

   
  
   
    
  ],
  imports: [
    CommonModule,
    MatPaginatorModule,
    FormsModule,
    MatSortModule,
    PagesRoutingModule,
    MatSelectModule,
    MatDatepickerModule,
    MatDatepickerModule,
    MatTableModule,
    FormsModule,
    FormsModule,
    CardModule,
    MatNativeDateModule,
    MatInputModule,
    MatSelectModule,
    MatRadioModule,
    ButtonModule,
    GridModule,
    FormsModule,
    FormsModule,
    FormsModule,
    IconModule,
    ReactiveFormsModule,
    FormsModule,
    FormsModule,
    FormModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatInputModule
  ]
})
export class PagesModule {
}
