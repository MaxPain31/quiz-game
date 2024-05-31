import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from '../admin/admin.service';
import { iQuiz } from '../admin/model';
import { QuizService } from '../quiz.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  quizList: iQuiz[] = [];
  constructor(private router: Router, private admin: AdminService, private quiz: QuizService) {}

  async ionViewWillEnter() {
    this.quizList = await this.admin.getAllQuiz();
  }

  goToModePage() {
    this.router.navigate(['mode']);
  }

  async goToType(type: string) {
    const newQuizList = this.quizList.filter(quiz => quiz.category.includes(type));
    const setData = [
      {
        type: type,
        question: newQuizList
      }
    ];
    localStorage.setItem('type', type);
    localStorage.setItem('quiz', JSON.stringify(setData));
    this.router.navigate(['mode']);
    console.log(newQuizList);
  }
}


