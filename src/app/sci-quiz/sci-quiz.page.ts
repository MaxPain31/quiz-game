
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { iQuiz } from '../admin/model';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-sci-quiz',
  templateUrl: './sci-quiz.page.html',
  styleUrls: ['./sci-quiz.page.scss'],
})
export class SciQuizPage implements OnInit {
  quizList: iQuiz[] = [];
  currentQuestionIndex: number = 0;
  lives: number = 5;
  timer: number = 30;
  intervalId: any;
  currentLevel: number = 1;
  alreadyClicked: boolean = false;
  correctAnswers: number = 0;
  totalQuestions: number = 0;
  score: number = 0;
  questionScore: number = 300;

  constructor(private router: Router, private auth: AuthenticationService) {}

  ionViewWillEnter() {
    this.getData();
    this.getCurrentLevel();
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
    this.totalQuestions = this.quizList.length;
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
    this.correctAnswers = 0;
    this.score = 0;
    this.resetTimer();
    this.startTimer();
  }

  startTimer() {
    this.clearTimer();
    this.timer = 30;
    this.questionScore = 300;
    this.intervalId = setInterval(() => {
      this.timer--;
      if (this.timer % 5 === 0) {
        this.questionScore = Math.max(this.questionScore - 60, 0);
      }
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
      if (!this.isLevelCompleted(this.currentLevel)) {
        this.completeCurrentLevel();
      }
      this.showResults();
      this.router.navigate(['score']);
    }
  }

  async checkAnswer(selectedOption: string) {
    const currentQuestion = this.quizList[this.currentQuestionIndex];
    if (selectedOption === currentQuestion.correctAnswer) {
      this.correctAnswers++;
      this.score += this.questionScore; 
      this.moveToNextQuestion();
    } else {
      this.lives--;
      if (this.lives === 0) {
        this.clearTimer();
        console.log('Game over! No lives left.');
        this.router.navigate(['/game-over']);
      } else {
        this.auth.presentToast(`Incorrect answer! You have ${this.lives} lives left. Try again.`);
      }
    }
  }

  resetTimer() {
    this.clearTimer();
    this.timer = 30;
    this.questionScore = 300; 
  }

  getCurrentLevel(): void {
    const storedLevel = localStorage.getItem('currentSciLevel');
    this.currentLevel = storedLevel ? parseInt(storedLevel, 10) : 1;
    if (isNaN(this.currentLevel)) {
      this.currentLevel = 1;
    }
  }

  isLevelCompleted(level: number): boolean {
    const completedLevels = this.getCompletedLevels();
    return completedLevels.includes(level);
  }

  getCompletedLevels(): number[] {
    const storedLevels = localStorage.getItem('completedSciLevels');
    return storedLevels ? JSON.parse(storedLevels) : [];
  }

  completeCurrentLevel(): void {
    const completedLevels = this.getCompletedLevels();
    if (!completedLevels.includes(this.currentLevel)) {
      completedLevels.push(this.currentLevel);
      localStorage.setItem('completedSciLevels', JSON.stringify(completedLevels));
      this.incrementCurrentLevel();
    }
  }

  incrementCurrentLevel(): void {
    this.currentLevel++;
    localStorage.setItem('currentSciLevel', this.currentLevel.toString());
  }

  showResults() {
    localStorage.setItem('score', this.score.toString());
    localStorage.setItem('totalQuestion', this.totalQuestions.toString());
    localStorage.setItem('correctAnswer', this.correctAnswers.toString());
  }
  back() {
    this.router.navigate(['sci-level']);
  }
}
