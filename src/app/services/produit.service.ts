import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { Produit } from 'src/app/models/produit.model';


@Injectable({
  providedIn: 'root'
})
export class ProduitService {

  private baseUrl = 'http://localhost:8080/api/produits';

  constructor(private http: HttpClient) { }

  getAllProduits(): Observable<Produit[]> {
    console.log("get all")
    return this.http.get<Produit[]>(`http://localhost:8080/api/produits/all`).pipe(
      catchError(this.handleError)
    );
  }

  getProduitById(id: number): Observable<Produit> {
    return this.http.get<Produit>(`${this.baseUrl}/${id}`).pipe(
      catchError(this.handleError)
    );
  }

  createProduit(produit: Produit): Observable<Produit> {
    return this.http.post<Produit>(`${this.baseUrl}/add`, produit).pipe(
      catchError(this.handleError)
    );
  }

  updateProduit(id: number, produit: Produit): Observable<Produit> {
    return this.http.put<Produit>(`${this.baseUrl}/${id}`, produit).pipe(
      catchError(this.handleError)
    );
  }

  deleteProduit(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${id}`).pipe(
      catchError(this.handleError)
    );
  }
 

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // Erreur côté client
      console.error('Une erreur s\'est produite côté client :', error.error.message);
    } else {
      // Erreur côté serveur
      console.error(
        `Code d'erreur : ${error.status}, ` +
        `message : ${error.error}`);
    }

    // Vérification spécifique pour une erreur de parsing JSON
    if (error.status === 200 && error.error instanceof ProgressEvent) {
      return throwError('Une erreur de parsing JSON est survenue.');
    }

    // Erreur générale
    return throwError('Une erreur s\'est produite lors de la communication avec le serveur.');
  }
}