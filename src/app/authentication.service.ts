import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { iQuiz } from './admin/model';
@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  quizList: iQuiz[]=[]
  constructor(private router: Router, private alertController:AlertController) { }
  
  setAuthentication(auth:boolean){
    if (auth){
      localStorage.setItem("loggedIn", "true");
    }
  }
  canActivate(){
    if (localStorage.getItem("loggedIn") == "true"){
      return true;
    }
    this.router.navigate(['login']);
    return false;
  }

  async signUp(email: string, password: string, retypePassword: string){
    if (!email || !password || !retypePassword){
      this.presentAlert('Error', 'Please fill in all fields.');
      return;
    }

    if (password !== retypePassword){
      this.presentAlert('Error', 'Password do not match');
      return;
    }

    const auth = getAuth();
      createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {

        const user = userCredential.user;
        this.presentAlert('Success', 'Sign up successfull');
        this.router.navigate(['/login']);

      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message
        console.error(error);
      });

  }

  async login(email:string, password: string){
    const auth = getAuth();
      signInWithEmailAndPassword(auth,email,password)
      .then((userCredential) => {

        const user = userCredential.user;
        this.setAuthentication(true);
        this.presentAlert('Success', 'Sign up successfull');
        this.router.navigate(['home']);

      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message
        console.error(error);
      });
  }

  async presentAlert(header: string, message: string) {
    const alert = await this.alertController.create({
      header: header,
      message: message,
      buttons: ['OK']
    });
    await alert.present();
  }


}
