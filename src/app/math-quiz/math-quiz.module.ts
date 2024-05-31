import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MathQuizPageRoutingModule } from './math-quiz-routing.module';

import { MathQuizPage } from './math-quiz.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MathQuizPageRoutingModule
  ],
  declarations: [MathQuizPage]
})
export class MathQuizPageModule {}
