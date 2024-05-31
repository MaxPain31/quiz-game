import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { iQuiz } from '../admin/model';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.page.html',
  styleUrls: ['./quiz.page.scss'],
})
export class QuizPage implements OnInit, OnDestroy {
  quizList: iQuiz[] = [];
  currentQuestionIndex: number = 0;
  lives: number = 5;
  timer: number = 30;
  intervalId: any;

  constructor(private router: Router, private auth: AuthenticationService) {}

  ionViewWillEnter() {
    this.getData();
  }

  ngOnInit() {
    this.resetGame();
  }

  ngOnDestroy() {
    this.clearTimer();
  }

  async getData() {
    const storedQuizList = localStorage.getItem('quiz');
    if (storedQuizList) {
      const quizData = JSON.parse(storedQuizList);
      if (quizData.length > 0 && quizData[0].question) {
        this.quizList = quizData[0].question;
        this.shuffleQuizList();
        this.shuffleChoices();
      }
    }
    console.log(this.quizList);
  }
  
  shuffleQuizList() {
    for (let i = this.quizList.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [this.quizList[i], this.quizList[j]] = [this.quizList[j], this.quizList[i]];
    }
  }
  
  shuffleChoices() {
    for (let i = 0; i < this.quizList.length; i++) {
      const choices = this.quizList[i].choices;
      for (let j = choices.length - 1; j > 0; j--) {
        const k = Math.floor(Math.random() * (j + 1));
        [choices[j], choices[k]] = [choices[k], choices[j]];
      }
    }
  }
  
  resetGame() {
    this.currentQuestionIndex = 0;
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
    if (this.currentQuestionIndex < this.quizList.length - 1) {
      this.currentQuestionIndex++;
      this.resetTimer();
      this.startTimer();
    } else {
      this.clearTimer();
      this.router.navigate(['/tech-level']);
    }
  }

  checkAnswer(selectedOption: string) {
    const currentQuestion = this.quizList[this.currentQuestionIndex];
    if (selectedOption === currentQuestion.correctAnswer) {
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