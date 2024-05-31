import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tech-quiz3',
  templateUrl: './tech-quiz3.page.html',
  styleUrls: ['./tech-quiz3.page.scss'],
})
export class TechQuiz3Page implements OnInit, OnDestroy{

  currentQuestion: number = 1; // Track the current question number
  lives: number = 5; // Track the number of lives
  timer: number = 30; // Time in seconds for each question
  intervalId: any; // Store the interval ID for clearing the timer

  constructor(private router: Router) {}

  ngOnInit() {
    this.resetGame(); // Reset the game state when the component is initialized
    this.startTimer(); // Start the timer for the first question
  }

  ngOnDestroy() {
    this.clearTimer(); // Clear the interval when the component is destroyed
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
    const correctAnswers = ['a', 'c', 'a', 'a', 'b'];

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

