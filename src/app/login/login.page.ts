import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../authentication.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  email: string = '';
  password: string ='';
  
  constructor(private authService: AuthenticationService) { }

  ngOnInit() {
  }
  login() {
    this.authService.login(this.email, this.password);
    this.email = '';
    this.password = '';
  
  }
}
