import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TechLevelPage } from './tech-level.page';

const routes: Routes = [
  {
    path: '',
    component: TechLevelPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TechLevelPageRoutingModule {}
