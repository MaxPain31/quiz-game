import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { AdminService } from '../admin/admin.service';
import { iQuiz } from '../admin/model';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-levels',
  templateUrl: './levels.page.html',
  styleUrls: ['./levels.page.scss'],
})
export class LevelsPage {
  id: string[]=[];
  quizList: iQuiz[] = [];
  type: string;
  mode:string;
  levels: string[] = [
    '1',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
    '10',
  ]
  constructor(private router: Router, private admin: AdminService) {}

  async ionViewWillEnter(){
    this.quizList = await this.admin.getAllQuiz();
    console.log(this.quizList);
    
  }

  async selectLevel(level: string) {
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
    this.router.navigate(['quiz']);
  }

}
