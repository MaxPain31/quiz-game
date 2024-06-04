import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from '../admin/admin.service';
import { iQuiz } from '../admin/model';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-sci-level',
  templateUrl: './sci-level.page.html',
  styleUrls: ['./sci-level.page.scss'],
})
export class SciLevelPage {

  id: string[] = [];
  quizList: iQuiz[] = [];
  type: string;
  mode: string;
  levels: string[] = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'];
  completedLevel: number; 

  constructor(private router: Router, private admin: AdminService, private auth: AuthenticationService) {
    const savedCompletedLevel = localStorage.getItem('completedLevel');
    if (savedCompletedLevel) {
      this.completedLevel = parseInt(savedCompletedLevel, 10);
    }
  }


  async ionViewWillEnter() {
    this.quizList = await this.admin.getAllQuiz();
    this.getCurrentLevel();
    console.log(this.quizList);
  }

  async selectLevel(level: string) {
    if (parseInt(level) > this.completedLevel) {
      this.auth.presentToast('Level locked. Complete level ' + this.completedLevel + ' first.');
      return;
    }

    const type = localStorage.getItem('type');
    const mode = localStorage.getItem('mode');

    if (!type || !mode) {
      console.error('Type or Mode not found in localStorage');
      return;
    }

    const newQuizList = this.quizList.filter(quiz => 
      quiz.level.includes(level) && quiz.type === mode && quiz.category.includes(type)
    );

    console.log(newQuizList);
    const setData = [{
      type: type,
      mode: mode,
      level: level,
      question: newQuizList
    }];

    localStorage.setItem('quiz', JSON.stringify(setData));
    this.router.navigate(['sci-quiz']);

  }

  async onQuizCompleted(correct: boolean) {
    if (correct) {
      this.completedLevel++;
      localStorage.setItem('completedLevel', this.completedLevel.toString());
      this.router.navigate(['success']);
    } else {
      console.error('Some questions were answered incorrectly.');
    }
  }

  getCurrentLevel(): void {
    const storedLevel = localStorage.getItem('currentSciLevel');
    this.completedLevel = storedLevel ? parseInt(storedLevel, 10) : 1;
  }

  back() {
    this.router.navigate(['mode']);
  }

}
