import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ScienceQuiz3PageRoutingModule } from './science-quiz3-routing.module';

import { ScienceQuiz3Page } from './science-quiz3.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ScienceQuiz3PageRoutingModule
  ],
  declarations: [ScienceQuiz3Page]
})
export class ScienceQuiz3PageModule {}
