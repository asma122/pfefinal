import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { RegistrationService } from 'src/app/services/registration.service';
import { EmailService } from 'src/app/services/email.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Produit } from 'src/app/models/produit.model';


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit  {

users: User[] = [];
user: any;
produits: Produit[] = [];


  constructor(private registrationService: RegistrationService, private emailService: EmailService,private http: HttpClient) {
    
   }

   ngOnInit(): void {
    this.getAllUsers();
  }
  getAllUsers(): void {
    this.registrationService.getAllUsers().subscribe(
      (data) => {
        this.users = data; // Assign the response data to the users array
        this.users = data.filter(user => user.role !== 'ADMIN');
      },
      (error) => {
        console.error('Error fetching users:', error);
      }
    );
  }

  deleteUser(userId: number): void {
    this.registrationService.deleteUser(userId).subscribe(
      () => {
        // If deletion is successful, remove the user from the local array
        this.users = this.users.filter(user => user.id !== userId);
        console.log('User deleted successfully.');
      },
      (error) => {
        console.error('Error deleting user:', error);
      }
    );
  }
  assignUserToProduct(user: User, productId: number): void {
    // Logic to assign user to product
    console.log(`Assign user ${user.id} to product ${productId}`);
    // Call your service method to assign user to product
  }
  sendEmailToAllUsers(productName: string): void {
    const userEmails: string[] = this.users.map(user => user.emailId.trim());
    
    console.log('Liste des adresses e-mail avant validation :', userEmails);
  
    userEmails.forEach(userEmail => {
      if (this.isValidEmail(userEmail)) {
        this.emailService.sendMail([], userEmail, [], `Confirmation d'ajout de produit - ${productName}`, `Bonjour,
  
          Un nouveau produit (${productName}) a été ajouté. 
          Cordialement,
          Votre équipe VERMEG`, productName)
          .subscribe(
            () => {
              console.log('E-mail envoyé avec succès à', userEmail);
            },
            (error) => {
              console.error('Erreur lors de l\'envoi de l\'e-mail à', userEmail, ':', error);
            }
          );
      } else {
        console.error('Adresse e-mail non valide :', userEmail);
      }
    });
  }
  
  isValidEmail(email: string): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }
  
}

