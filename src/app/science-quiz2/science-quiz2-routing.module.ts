import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ScienceQuiz2Page } from './science-quiz2.page';

const routes: Routes = [
  {
    path: '',
    component: ScienceQuiz2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ScienceQuiz2PageRoutingModule {}
