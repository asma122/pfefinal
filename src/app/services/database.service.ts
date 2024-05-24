import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {
  insertData(formData: any): Observable<any> {
    // Supposons que vous effectuez une requête HTTP POST ici
    return this.http.post<any>('/api/produits', formData);
  }
  constructor(private http: HttpClient) { }
}
