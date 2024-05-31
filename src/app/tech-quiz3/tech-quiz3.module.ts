import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TechQuiz3PageRoutingModule } from './tech-quiz3-routing.module';

import { TechQuiz3Page } from './tech-quiz3.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TechQuiz3PageRoutingModule
  ],
  declarations: [TechQuiz3Page]
})
export class TechQuiz3PageModule {}
