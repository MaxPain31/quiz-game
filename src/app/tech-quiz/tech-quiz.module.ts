import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TechQuizPageRoutingModule } from './tech-quiz-routing.module';

import { TechQuizPage } from './tech-quiz.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TechQuizPageRoutingModule
  ],
  declarations: [TechQuizPage]
})
export class TechQuizPageModule {}
