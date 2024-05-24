import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { User } from '../models/user';
import { Produit } from '../models/produit.model';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {
    assignProductToUser(id: number, id1: any, selectedProductName: any) {
      throw new Error('Method not implemented.');
    }
    getAllProducts() {
      throw new Error('Method not implemented.');
    }
    getAssignedProducts(userId: number) {
      throw new Error('Method not implemented.');
    }
  
    private baseUrl = 'http://localhost:8080/api/users';
  
    constructor(private _http: HttpClient) { }
    public loginUser(User:User):Observable<any>{
      return this._http.post<any>("http://localhost:8080/login",User)
  
    }
    public registerUser(User:User):Observable<any>{
      return this._http.post<any>("http://localhost:8080/registeruser",User);
  
    }
    checkAdmin(user: User): Observable<boolean> {
      return this._http.post<boolean>('http://localhost:8080/checkadmin', user);
    }
   
    public getAllUsers(): Observable<User[]> { // Changed the return type to Observable<User[]>
      return this._http.get<User[]>('http://localhost:8080/api/users'); // Changed the return type
    }
  
    public deleteUser(userId: number): Observable<void> {
      const url = `${this.baseUrl}/${userId}`;
      return this._http.delete<void>(url).pipe(
        catchError(this.handleError)
      );
    }
    private handleError(error: HttpErrorResponse) {
      if (error.error instanceof ErrorEvent) {
        // A client-side or network error occurred. Handle it accordingly.
        console.error('An error occurred:', error.error.message);
      } else {
        // The backend returned an unsuccessful response code.
        // The response body may contain clues as to what went wrong.
        console.error(
          `Backend returned code ${error.status}, ` +
          `body was: ${error.error}`);
      }
      // Return an observable with a user-facing error message.
      return throwError('Something bad happened; please try again later.');
    }
  }
