import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-science-quiz3',
  templateUrl: './science-quiz3.page.html',
  styleUrls: ['./science-quiz3.page.scss'],
})
export class ScienceQuiz3Page implements OnInit ,OnDestroy{
  currentQuestion: number = 1; 
  lives: number = 5;
  timer: number = 30;
  intervalId: any; 
  constructor(private router: Router) {}

  ngOnInit() {
    this.resetGame(); 
    this.startTimer(); 
  }

  ngOnDestroy() {
    this.clearTimer();
  }

  resetGame() {
    this.currentQuestion = 1;
    this.lives = 5;
    this.resetTimer();
    this.startTimer();
  }

  startTimer() {
    this.clearTimer(); 
    this.timer = 30; 
    this.intervalId = setInterval(() => {
      this.timer--;
      if (this.timer === 0) {
        this.handleTimeOut();
      }
    }, 1000);
  }

  clearTimer() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }

  handleTimeOut() {
    this.lives--; 
    if (this.lives === 0) {
      this.clearTimer();
      this.router.navigate(['/game-over']); 
    } else {
      console.log(`Time's up! You have ${this.lives} lives left. Try again.`);
      this.resetTimer();
      this.startTimer();
    }
  }

  moveToNextQuestion() {
    if (this.currentQuestion < 5) {
      this.currentQuestion++;
      this.resetTimer();
      this.startTimer();
    } else {
      this.clearTimer();
      this.router.navigate(['/tech-level']);
    }
  }

  checkAnswer(selectedOption: string, questionNumber: number) {
    const correctAnswers = ['b', 'b', 'b','a','c'];

    if (selectedOption === correctAnswers[questionNumber - 1]) {
      this.moveToNextQuestion();
    } else {
      this.lives--;
      if (this.lives === 0) {
        this.clearTimer();
        console.log('Game over! No lives left.');
        this.router.navigate(['/game-over']);
      } else {
        console.log(`Incorrect answer! You have ${this.lives} lives left. Try again.`);
      }
    }
  }

  resetTimer() {
    this.clearTimer();
    this.timer = 30;
  }
}
