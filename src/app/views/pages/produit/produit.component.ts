import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ProduitService } from 'src/app/services/produit.service';
import { Produit } from 'src/app/models/produit.model'
@Component({
  selector: 'app-produit',
  templateUrl: './produit.component.html',
  styleUrls: ['./produit.component.scss']
})
export class ProduitComponent implements OnInit{
  produitForm!: FormGroup;
  produits: Produit[] = [];
  http: any;
  constructor(private formBuilder: FormBuilder, private produitService: ProduitService) {
    this. produitForm = this.formBuilder.group({
      id: ['', Validators.required], // Utilisez Validators si nécessaire
    });
  }
  ngOnInit(): void {
    this.loadProduits();
    this.produitForm = this.formBuilder.group({
      name: ['', Validators.required] // Make sure the name control is defined here
    });
  }

  loadProduits() {
    this.produitService.getAllProduits().subscribe(produits => {
      this.produits = produits;
    });
  }

  createProduit() {
    const newProduit: Produit = {
      id: null,
      name: this.produitForm.value.name 
    };
    this.produitService.createProduit(newProduit).subscribe((res) => {
      console.log(res);
    });
  }
  

  deleteProduit(id: number) {
    this.produitService.deleteProduit(id).subscribe(() => {
      this.produits = this.produits.filter(produit => produit.id !== id);
    });
  }
}
export { Produit };

