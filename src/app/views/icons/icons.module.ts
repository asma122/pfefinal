import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardModule, GridModule } from '@coreui/angular';
import { IconModule } from '@coreui/icons-angular';
import { IconsRoutingModule } from './icons-routing.module';
import { DocsComponentsModule } from '@docs-components/docs-components.module';
import { TacheComponent } from './tache/tache.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator'; 
import { ConsultertacheComponent } from './consultertache/consultertache.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    IconsRoutingModule,
    CardModule,
    GridModule,
    MatTableModule,
    ReactiveFormsModule,
    MatPaginatorModule,
    MatTableModule ,
    MatPaginatorModule,
    FormsModule,
    ReactiveFormsModule,
    IconModule,
    CommonModule,
    DocsComponentsModule
  ],
  declarations: [
    TacheComponent,
    ConsultertacheComponent
  ]
})
export class IconsModule {
}
