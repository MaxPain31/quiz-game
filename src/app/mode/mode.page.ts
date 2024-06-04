import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Quiz, iQuiz } from '../admin/model';
import { AuthenticationService } from '../authentication.service';
import { AdminService } from '../admin/admin.service';

@Component({
  selector: 'app-mode',
  templateUrl: './mode.page.html',
  styleUrls: ['./mode.page.scss'],
})
export class ModePage {
  quizList: iQuiz[] = [];
  storedQuizList: any[] = [];
  type: string;
  constructor(private router: Router, private auth:AuthenticationService, private admin: AdminService) {}

  async ionViewWillEnter(){
    this.getData();
  }

  async getData() {
    const storedQuizList = localStorage.getItem('quiz');
    const quizData = JSON.parse(storedQuizList);
    this.quizList = quizData[0].question;
    this.type = quizData[0].type;
  }

  goToMode(mode: string) {
    localStorage.setItem('mode', mode);
    const newQuizList = this.quizList.filter(quiz => quiz.type == mode);
    const setData = [
      {
        type: this.type,
        mode: mode,
        question: newQuizList
      }
    ];
    localStorage.setItem('quiz', JSON.stringify(setData));
    if (this.type == 'Mathematics') {
      this.router.navigate(['levels']);
    } else if (this.type == 'Science') {
      this.router.navigate(['sci-level']);
    } else {
      this.router.navigate(['tech-level']);
    }
  }

  modeNavigate(){
    this.router.navigate(['levels']);
  }
  
  back() {
    this.router.navigate(['home']);
  }
}
