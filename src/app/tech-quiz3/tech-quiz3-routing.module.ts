import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TechQuiz3Page } from './tech-quiz3.page';

const routes: Routes = [
  {
    path: '',
    component: TechQuiz3Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TechQuiz3PageRoutingModule {}
