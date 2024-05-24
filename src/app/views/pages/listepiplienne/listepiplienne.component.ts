import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listepiplienne',
  templateUrl: './listepiplienne.component.html',
  styleUrls: ['./listepiplienne.component.scss']
})
export class ListepiplienneComponent implements OnInit {
  items: { status: string, pipelines: string, stages: string, createdBy: string }[];

  constructor() {
      this.items = [
          { status: 'warning', pipelines: 'Schedueld Ruby 3.2 ruby3_2 branch #1234145533', stages: 'passed, failed, passed', createdBy: '#' },
          { status: 'passed', pipelines: 'Schedueld Ruby 3.2 ruby3_2 branch #1234145533', stages: 'passed, passed, failed', createdBy: '#' }
      ];
  }

  ngOnInit(): void {
      // Code d'initialisation
  }

  addItem() {
      this.items.push({ status: '', pipelines: '', stages: '', createdBy: '' });
  }

  submit() {
      console.log('Submitted items:', this.items);
      location.reload(); // Recharge la page
  }

  searchItem(item: any) {
      // Logique de recherche pour l'élément spécifique
      console.log('Searching item:', item);
  }

  printItem(item: any) {
      // Logique d'impression pour l'élément spécifique
      console.log('Printing item:', item);
  }

 
}
