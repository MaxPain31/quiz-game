import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Quiz, iQuiz } from './model';
import { AdminService } from './admin.service';
import { AuthenticationService } from '../authentication.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.page.html',
  styleUrls: ['./admin.page.scss'],
})
export class AdminPage implements OnInit {
  quizList: iQuiz[] = [];
  quizzes: Quiz = new Quiz();
  isLoading: boolean = false;

  constructor(
    private router: Router,
    private adminService: AdminService,
    private auth: AuthenticationService,
    private alertController: AlertController 
  ) {}

  ngOnInit() {}

  ionViewWillEnter() {
    this.quiz();
  }

  async quiz() {
    this.isLoading = true;
    this.quizList = await this.adminService.getAllQuiz();
    this.auth.quizList = this.quizList;
    this.isLoading = false;
  }

  goToCreate() {
    this.router.navigate(['create']);
  }

  async updateQuiz(quiz: Quiz) {
    this.router.navigate(['update', quiz.id]);
    this.auth.quizList = this.quizList;
  }

  async confirmDeleteQuiz(quiz: Quiz) {
    const alert = await this.alertController.create({
      header: 'Confirm Delete',
      message: 'Are you sure you want to delete this question?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
           
          },
        },
        {
          text: 'Delete',
          handler: () => {
            this.deleteQuiz(quiz);
          },
        },
      ],
    });

    await alert.present();
  }

  async deleteQuiz(quiz: Quiz) {
  
  }
}
