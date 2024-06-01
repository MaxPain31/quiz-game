import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../authentication.service';
@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.page.html',
  styleUrls: ['./sign-up.page.scss'],
})
export class SignUpPage implements OnInit {

 
  email: string = '';
  password: string = '';
  retypePassword: string = '';

  constructor(private authService: AuthenticationService) { }

  ngOnInit() {
  }
  signUp() {
    this.authService.signUp(this.email, this.password, this.retypePassword);
    this.email = '';
    this.password = '';
    this.retypePassword = '';
  }



}
