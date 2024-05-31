import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ScienceQuizPage } from './science-quiz.page';

const routes: Routes = [
  {
    path: '',
    component: ScienceQuizPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ScienceQuizPageRoutingModule {}
