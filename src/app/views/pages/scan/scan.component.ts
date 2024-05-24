import { Component } from '@angular/core';

@Component({
  selector: 'app-scan',
  templateUrl: './scan.component.html',
  styleUrls: ['./scan.component.scss']
})
export class ScanComponent {
  showError: boolean = false;
  scans = [
    { id: 1, name: 'Scan 1', blocker: 0, critical: 0, high: 0, editing: false },
    { id: 2, name: 'Scan 2', blocker: 0, critical: 0, high: 0, editing: false },
    { id: 3, name: 'Scan 3', blocker: 0, critical: 0, high: 0, editing: false },
    { id: 4, name: 'Scan 4', blocker: 0, critical: 0, high: 0, editing: false },
    { id: 5, name: 'Scan 5', blocker: 0, critical: 0, high: 0, editing: false },
  ];

  checkInput(event: any): void {
    const inputValue = event.target.value;
    this.showError = !inputValue.includes('scan');
  }

  syncBlock(scanId: number): void {
    console.log(`Synchronizing scan with ID: ${scanId}`);
    // Ajoutez ici la logique de synchronisation pour le scan spécifié
  }

  reloadPage(): void {
    location.reload();
  }

  deleteAllScans(): void {
    if (confirm("Voulez-vous vraiment supprimer tous les scans ?")) {
      this.scans = [];
    }
  }

  deleteScan(scanId: number): void {
    this.scans = this.scans.filter(scan => scan.id !== scanId);
  }

  editScan(scan: any): void {
    if (scan.editing) {
      // Sauvegarder les modifications
      scan.editing = false;
      // Ajoutez ici la logique pour sauvegarder les modifications si nécessaire
    } else {
      // Passer en mode édition
      scan.editing = true;
    }
  }
}