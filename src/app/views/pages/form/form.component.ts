import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { DatabaseService } from 'src/app/services/database.service';
import { Produit } from '../produit/produit.component';
import { ProduitService } from 'src/app/services/produit.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  
  form!: FormGroup;
  produitlist: string[] = [ ];
  
  
  constructor( private formBuilder: FormBuilder, private dbService: DatabaseService ,private produitService: ProduitService) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      // Définir les contrôles de formulaire ici
    });
  }
  // Méthodes
  onSubmitForm(): void {
    if (this.form.valid) {
      const formData = this.form.value;
      // Appeler la fonction pour insérer les données dans la base de données
      this.dbService.insertData(formData).subscribe(
        (response:any) => {
          console.log('Data inserted successfully:', response);
        },
        (error:any) => {
          console.error('Error while inserting data:', error);
        }
      );
    }
  }
  onCancel():void {
    console.log(this.form.value);

}
createProduit() {
  const newProduit: Produit = {
    id: null, name: 'Nouveau produit'
  };

  const bodyData = { id: newProduit.id, name: newProduit.name };
  this.produitService.createProduit(bodyData).subscribe((res)=> {
    console.log(res)
  })

}
}
