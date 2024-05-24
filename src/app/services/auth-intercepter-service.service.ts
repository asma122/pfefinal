import { HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Authentificationresponse } from '../models/authentificationresponse';

@Injectable({
  providedIn: 'root'
})
export class AuthIntercepterService implements HttpInterceptor {
  constructor() { }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let authenticationResponse : Authentificationresponse ={
      accessToken: '',
      refrechToken: ''
    };
    if(localStorage.getItem("accesstoken")){
      authenticationResponse= JSON.parse(localStorage.getItem("accesstoken") as string )
   req=req.clone({
    headers:new  HttpHeaders({
      Authorization:"Bearer "+authenticationResponse.accessToken
    })
  })
    }
  return next.handle(req)
    }


}

