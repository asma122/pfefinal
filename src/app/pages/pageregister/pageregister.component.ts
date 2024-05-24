import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pageregister',
  templateUrl: './pageregister.component.html',
  styleUrls: ['./pageregister.component.scss']
})
export class PageregisterComponent implements OnInit {
icons: any;
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  } 
   //authreques:Authentificationrequest=new Authentificationrequest()
   form= new FormGroup({
    email: new FormControl(),
    password : new FormControl()
  })
  errorMsg:string="";
  constructor(private router: Router ) { }
 pageregister(){
    console.log(this.form.value)
  //  this.servauth.register(this.authreques).subscribe(
  //     ress =>{
  //       console.log(this.authreques.value)
  //       this.servauth.setUserToken(ress)
        
  //       this.router.navigate(["login"])

  //     },error =>{
  //       this.errorMsg= "email ou mot de pass incorect"
  //     }
  //    )

  }



}
