import { RouterLink } from '@angular/router';
import { Component, OnInit } from '@angular/core';



import {
  ColComponent,
  ProgressBarComponent,
  WidgetStatCComponent,
  ProgressComponent,
  TextColorDirective,
  WidgetStatBComponent,
  ButtonDirective,
  DropdownComponent,
  DropdownItemDirective,
  DropdownMenuDirective,
  DropdownToggleDirective,
  RowComponent,
  TemplateIdDirective,
  WidgetStatAComponent
} from '@coreui/angular';
import { ChartjsComponent } from '@coreui/angular-chartjs';
import { cilArrowTop, cilOptions } from '@coreui/icons';
import { IconDirective } from '@coreui/icons-angular';
import { getStyle } from '@coreui/utils';

@Component({
  selector: 'app-dashboardprojet',
  templateUrl: './dashboardprojet.component.html',
  styleUrls: ['./dashboardprojet.component.scss'],
  standalone: true,
  imports: [
    RowComponent,
    RowComponent,
    ColComponent,
    TextColorDirective,
    
    WidgetStatBComponent,
    ProgressComponent,
    ProgressBarComponent,
    WidgetStatAComponent,
    TemplateIdDirective,
    IconDirective,
    DropdownComponent,
    ButtonDirective,
    DropdownToggleDirective,
    DropdownMenuDirective,
    DropdownItemDirective,
    RouterLink,
    ChartjsComponent
  ]
})

export class DashboardprojetComponent implements OnInit {

  icons = { cilOptions, cilArrowTop };

  data: any = {};
  options: any = {};
  labels = [];
  datasets = [];
  ngOnInit(): void {
     this.data = {
       labels: this.labels.slice(0, 7),
       datasets: this.datasets
     };
  }

  // widgetTitle: string = 'Widget title';
  // widgetValue: string = '75.9%';
}
