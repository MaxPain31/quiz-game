import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-score',
  templateUrl: './score.page.html',
  styleUrls: ['./score.page.scss'],
})
export class ScorePage implements OnInit {

  totalQuestion: number;
  correctAnswer: number;
  score: number;

  constructor(private router: Router) { }

  ngOnInit() {
    
  }

  async ionViewWillEnter() {
    await this.getResult();
  }

  goHome() {
    this.router.navigate(['home']);
  }

  getResult() {
    const question = localStorage.getItem('totalQuestion');
    const correctAnswer = localStorage.getItem('correctAnswer');
    const score = localStorage.getItem('score');
    this.totalQuestion = parseInt(question);
    this.correctAnswer = parseInt(correctAnswer);
    this.score = parseInt(score);
  }

  chooseLevel() {
    const type = localStorage.getItem('type');
    if (type == 'Mathematics') {
      this.router.navigate(['levels']);
    } else if (type == 'Science') {
      this.router.navigate(['sci-level']);
    } else {
      this.router.navigate(['tech-level']);
    }
  }
}
