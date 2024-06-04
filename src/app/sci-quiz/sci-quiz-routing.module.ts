import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SciQuizPage } from './sci-quiz.page';

const routes: Routes = [
  {
    path: '',
    component: SciQuizPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SciQuizPageRoutingModule {}
