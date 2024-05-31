import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ScienceQuizPageRoutingModule } from './science-quiz-routing.module';

import { ScienceQuizPage } from './science-quiz.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ScienceQuizPageRoutingModule
  ],
  declarations: [ScienceQuizPage]
})
export class ScienceQuizPageModule {}
