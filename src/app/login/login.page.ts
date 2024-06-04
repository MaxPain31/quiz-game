import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../authentication.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  email: string = '';
  password: string ='';
  
  constructor(private authService: AuthenticationService, private router: Router) { }

  ngOnInit() {
  }
  login() {
    this.authService.login(this.email, this.password);
    this.email = '';
    this.password = '';
  
  }
  back() {
    this.router.navigate(['start']);
  }
}
