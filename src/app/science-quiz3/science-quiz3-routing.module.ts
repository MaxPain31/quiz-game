import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ScienceQuiz3Page } from './science-quiz3.page';

const routes: Routes = [
  {
    path: '',
    component: ScienceQuiz3Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ScienceQuiz3PageRoutingModule {}
