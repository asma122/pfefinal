import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {  ReactiveFormsModule } from '@angular/forms';
import { DocsComponentsModule } from '@docs-components/docs-components.module';
import { ButtonsRoutingModule } from './buttons-routing.module';
import { FormsModule } from '@angular/forms';

import {
  ButtonGroupModule,
  ButtonModule,
  CardModule,
  CollapseModule,
  DropdownModule,
  FormModule,
  GridModule,
  NavbarModule,
  NavModule,
  SharedModule,
  UtilitiesModule
} from '@coreui/angular';

import { IconModule } from '@coreui/icons-angular';
import { ProjectlistComponent } from './projectlist/projectlist.component';
import { ListproduitprojetComponent } from './listproduitprojet/listproduitprojet.component';

@NgModule({
  declarations: [
    ProjectlistComponent,
    ListproduitprojetComponent,

  ],
  imports: [
    CommonModule,
    FormsModule,
    ButtonsRoutingModule,
    ButtonModule,
    ButtonGroupModule,
    GridModule,
    FormsModule,
    IconModule,
    CardModule,
    UtilitiesModule,
    DropdownModule,
    SharedModule,
    FormModule,
    FormsModule,
    ReactiveFormsModule,
    DocsComponentsModule,
    NavbarModule,
    FormsModule ,
    FormsModule,
    CollapseModule,
    NavModule,
    NavbarModule
  ]
})
export class ButtonsModule {
}
