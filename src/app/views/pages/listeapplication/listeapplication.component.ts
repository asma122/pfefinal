import { Component } from '@angular/core';

@Component({
  selector: 'app-listeapplication',
  templateUrl: './listeapplication.component.html',
  styleUrls: ['./listeapplication.component.scss']
})
export class ListeapplicationComponent {
    colonne: { Namespace: string, Applicationname: string, Etatdesante: string, selected: boolean }[];

    constructor() {
      this.colonne = [
        { Namespace: 'Default', Applicationname: 'Application', Etatdesante: 'Healthy', selected: false },
        { Namespace: 'Default', Applicationname: 'App2', Etatdesante: 'Progressing', selected: false },
        { Namespace: 'Default', Applicationname: 'App3', Etatdesante: 'Degraded', selected: false },
        { Namespace: 'Default', Applicationname: 'App4', Etatdesante: 'Suspended', selected: false },
        { Namespace: 'Default', Applicationname: 'App5', Etatdesante: 'Missing', selected: false },
        { Namespace: 'Default', Applicationname: 'App6', Etatdesante: 'Unknown', selected: false }
      ];
    }
  
    ngOnInit(): void {
    }
  
    addItem() {
      this.colonne.push({ Namespace: '', Applicationname: '', Etatdesante: '', selected: false });
    }
  
    submit() {
      const selectedItems = this.colonne.filter(item => item.selected);
      console.log('Submitted items:', selectedItems);
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
  
    refreshItem() {
      location.reload(); // Recharge la page
    }
  
    onSelect(index: number) {
      this.colonne.forEach((item, i) => {
        item.selected = i === index;
      });
    }
  }