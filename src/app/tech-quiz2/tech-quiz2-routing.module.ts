import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TechQuiz2Page } from './tech-quiz2.page';

const routes: Routes = [
  {
    path: '',
    component: TechQuiz2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TechQuiz2PageRoutingModule {}
