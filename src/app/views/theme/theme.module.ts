import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { CardModule, GridModule, NavModule, UtilitiesModule, TabsModule } from '@coreui/angular';
import { IconModule } from '@coreui/icons-angular';



// Theme Routing
import { ThemeRoutingModule } from './theme-routing.module';
import { OrganisationComponent } from './organisation/organisation.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    ThemeRoutingModule,
    CardModule,
    GridModule,
    UtilitiesModule,
    FormsModule,
    ReactiveFormsModule,
    IconModule,
    NavModule,
    TabsModule
  ],
  declarations: [
   
  
    OrganisationComponent
  ]
})
export class ThemeModule {
}
