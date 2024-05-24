import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProduitService } from 'src/app/services/produit.service';
import { Produit } from '../../pages/produit/produit.component';

@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.scss']
})
export class ProductlistComponent implements OnInit {
  produitForm!: FormGroup;
  produits: Produit[] = [];
  modeEdition = false; // Indicateur de mode édition
  produitEnEditionId: number | null = null; // ID du produit en cours d'édition

  constructor(private formBuilder: FormBuilder, private produitService: ProduitService) {
    this.produitForm = this.formBuilder.group({
      id: [''],
      name: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.loadProduits();
  }

  loadProduits() {
    this.produitService.getAllProduits().subscribe(
      produits => {
        this.produits = produits;
      },
      error => {
        console.error('Erreur lors du chargement des produits :', error);
      }
    );
  }

  createProduit() {
    if (this.produitForm.valid) {
      const newProduit: Produit = {
        id: null,
        name: this.produitForm.value.name 
      };
      
      if (this.modeEdition && this.produitEnEditionId !== null) {
        // Mode édition : mettre à jour le produit existant
        this.produitService.updateProduit(this.produitEnEditionId, newProduit).subscribe(() => {
          // Mettre à jour le produit dans la liste
          const produitIndex = this.produits.findIndex(produit => produit.id === this.produitEnEditionId);
          if (produitIndex !== -1) {
            this.produits[produitIndex].name = newProduit.name; // Mettre à jour seulement le nom du produit
          }
          // Réinitialiser le formulaire et les variables de mode édition
          this.modeEdition = false;
          this.produitEnEditionId = null;
          this.produitForm.reset();
        });
      } else {
        // Mode création : créer un nouveau produit
        this.produitService.createProduit(newProduit).subscribe((res) => {
          // Ajouter le nouveau produit à la liste produits après avoir reçu une réponse réussie du service
          this.produits.push({
            id: res.id, // Utilisation de l'ID reçu du service
            name: newProduit.name // Utilisation du nom du produit extrait du formulaire
          });
          // Réinitialiser le formulaire ou effectuer toute autre action nécessaire
          this.produitForm.reset();
        });
      }
    } else {
      console.error('Le formulaire n\'est pas valide.');
    }
  }
  

  deleteProduit(id: number | null) {
    if (id !== null) {
      this.produitService.deleteProduit(id).subscribe(() => {
        this.produits = this.produits.filter(produit => produit.id !== id);
      });
    } else {
      console.error('Pas de produit pour supprimer');
    }
  }

  editProduit(id: number | null) {
    if (id !== null) {
      // Mettre à jour le formulaire avec les détails du produit à modifier
      const produitToEdit = this.produits.find(produit => produit.id === id);
      if (produitToEdit) {
        this.produitEnEditionId = id;
        this.produitForm.patchValue({
          id: produitToEdit.id,
          name: produitToEdit.name
        });
        this.modeEdition = true;
      } else {
        console.error('Produit non trouvé');
      }
    } else {
      console.error('ID is null');
    }
  }

}
export { Produit };


