import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SciLevelPage } from './sci-level.page';

const routes: Routes = [
  {
    path: '',
    component: SciLevelPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SciLevelPageRoutingModule {}
