import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { Tache } from '../models/tache';

@Injectable({
  providedIn: 'root'
})
export class TacheService {
  markAsInProgress(taskId: number) {
    throw new Error('Method not implemented.');
  }
  markAsCompleted(taskId: number) {
    throw new Error('Method not implemented.');
  }
  private baseUrl = 'http://localhost:8080/api/taches';

  constructor(private http: HttpClient) { }

 
  public getAllTaches(): Observable<Tache[]> { 
    return this.http.get<Tache[]>(`${this.baseUrl}/all`); 
  }

  createTache(newTache: any): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/add`, newTache).pipe(
        catchError(this.handleError)
    );
}

  updateTache(id: number, updatedTache: any) {
    return this.http.put<any>(`${this.baseUrl}/${id}`, updatedTache);
  }
  public getAllTachesWithProjectDetails(): Observable<Tache[]> {
    return this.http.get<Tache[]>(`${this.baseUrl}/all-with-project-details`).pipe(
      catchError(this.handleError)
    );
  }
  deleteTache(id: number) {
    return this.http.delete(`${this.baseUrl}/${id}`);
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
  getProjetById(id: number): Observable<any> {
    return this.http.get<any>(`http://localhost:8080/api/projets/${id}`); // Adapté à votre API, mettez le bon endpoint
  }

}

