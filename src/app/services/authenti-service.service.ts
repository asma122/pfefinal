import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable, ɵisEnvironmentProviders } from '@angular/core';
import { Router } from '@angular/router';
import { Authentificationrequest } from '../models/authentificationreques';
import { Observable } from 'rxjs';
import { Authentificationresponse } from '../models/authentificationresponse';
import { Regesterrequest } from '../models/regesterrequest';
import { environment } from '../../environments/environment.development';
@Injectable({
  providedIn: 'root'
})
export class AuthentiService { 
  private baseUrl = environment.baseUrl + "/login";
  HttpClient: any;
  constructor(private router:Router,private http: HttpClient) { }
  //si il est authentifiée il va returner true sinon il va lui rediriger vers page login\\
  isUserAuthenticacted():boolean {
    if(localStorage.getItem(" accessToken")){
      return true;
    } 
    this.router.navigate(['/login']);
    return false;
  }
  //methode login//
  // methode de type observable 
  pagelogin(authentificationrequest : Authentificationrequest):Observable<Authentificationresponse>{
    const url=this.baseUrl+"/authenticate"
    return this.http.post<Authentificationresponse>(url,Regesterrequest)
  }
   pageregister(regesterrequest : Regesterrequest):Observable<Authentificationresponse>{
    const url=this.baseUrl+"/register"
    return this.http.post<Authentificationresponse>(url,Regesterrequest)
  } 

}
