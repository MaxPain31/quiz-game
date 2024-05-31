import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TechQuiz2PageRoutingModule } from './tech-quiz2-routing.module';

import { TechQuiz2Page } from './tech-quiz2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TechQuiz2PageRoutingModule
  ],
  declarations: [TechQuiz2Page]
})
export class TechQuiz2PageModule {}
