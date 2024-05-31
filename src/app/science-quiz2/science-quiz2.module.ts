import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ScienceQuiz2PageRoutingModule } from './science-quiz2-routing.module';

import { ScienceQuiz2Page } from './science-quiz2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ScienceQuiz2PageRoutingModule
  ],
  declarations: [ScienceQuiz2Page]
})
export class ScienceQuiz2PageModule {}
