import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { RegistrationService } from 'src/app/services/registration.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit{ 
  user = new User();
  msg = '';

  constructor(private _service: RegistrationService, private _router: Router) {}

  ngOnInit(): void {}

  loginUser() { 
     if (!this.user.emailId.endsWith('@gmail.com')) {
    this.msg = 'Please enter a valid Gmail address (e.g., example@gmail.com)';
    return;
  }
    this._service.loginUser(this.user).subscribe(
      data => {
        console.log("response received");
        if (data) {
          if (this.user.emailId === "admin@gmail.com") {
            this._router.navigate(['/admin']); // Route to admin interface
          } else {
            this._router.navigate(['/loginsuccess']); // Route to regular user interface
          }
        }
      },
      error => {
        console.log("exception occurred:", error);
        if (error.status === 404) { // Assuming 404 is returned when user not found
          this.msg = "User not found. Please check your credentials.";
        } else {
          this.msg = "This user doesn't exist";
        }
      }
    );
  }

  gotoregistration() {
    this._router.navigate(['/registration'])
  }
}
