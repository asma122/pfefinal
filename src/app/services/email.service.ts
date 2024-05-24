import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmailService {

  private apiUrl = 'http://localhost:8080/mail/send'; 

  constructor(private http: HttpClient) { }

  sendMail(file: File[], to: string, cc: string[], subject: string, body: string, projectName?: string): Observable<any> {
    const formData: FormData = new FormData();

    if (file && file.length > 0) {
      for (let i = 0; i < file.length; i++) {
        formData.append('file', file[i], file[i].name);
      }
    }

    formData.append('to', to);

    if (cc && cc.length > 0) {
      formData.append('cc', JSON.stringify(cc));
    }

    formData.append('subject', subject);
    formData.append('body', body);

    return this.http.post<any>(this.apiUrl, formData);
  }
}

