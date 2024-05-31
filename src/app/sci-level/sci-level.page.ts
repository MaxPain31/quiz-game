import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-sci-level',
  templateUrl: './sci-level.page.html',
  styleUrls: ['./sci-level.page.scss'],
})
export class SciLevelPage {
  constructor(private navCtrl: NavController, private router: Router) {}

  startQuiz() {
    this.router.navigate(['science-quiz']);
  }
  startQuiz2() {
    this.router.navigate(['science-quiz2']);
  }
  startQuiz3() {
    this.router.navigate(['science-quiz3']);
  }
}

