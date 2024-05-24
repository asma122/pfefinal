import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { RegistrationService } from 'src/app/services/registration.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {
  user: User = new User(); 
  msg: any = {};
  
  constructor(private _service : RegistrationService , private _router : Router){ }
  ngOnInit(): void {
  }
  Registerform() {
    if (!this.user.emailId.endsWith('@gmail.com')) {
      this.msg = 'Please enter a valid Gmail address (e.g., example@gmail.com)';
      return;
    }
    if (!this.user.emailId ||  !this.user.password ||  !this.user.fullname || !this.user.confirmPassword) {
      // Display error message for missing fields
      this.msg = { status: 400, message: 'All fields are required for registration' };
      return; // Exit registration process
    }
    if (this.user.password !== this.user.confirmPassword) {
      // Display error message for mismatched passwords
      this.msg = { status: 400, message: 'Passwords do not match' };
      return; // Exit registration process
    }
    this._service.registerUser(this.user).subscribe(
      data => {
        console.log('User registered successfully:', Response);
        this._router.navigate(['/login']);
      },
      (error: HttpErrorResponse) => {
        console.error('Error registering user:', error);
        if (error.status === 500 && error.error && error.error.message) {
          this.msg = { status: 500, message: error.error.message };
        } else {
          this.msg = { status: 500, message: 'Failed to register user. Please try again later.' };
        }
      }
    );
  }
  gotologin(){
    this._router.navigate(['/login'])
  }
  
}

