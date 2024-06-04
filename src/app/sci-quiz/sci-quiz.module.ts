import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SciQuizPageRoutingModule } from './sci-quiz-routing.module';

import { SciQuizPage } from './sci-quiz.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SciQuizPageRoutingModule
  ],
  declarations: [SciQuizPage]
})
export class SciQuizPageModule {}
