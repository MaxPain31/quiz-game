import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MathQuizPage } from './math-quiz.page';

const routes: Routes = [
  {
    path: '',
    component: MathQuizPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MathQuizPageRoutingModule {}
