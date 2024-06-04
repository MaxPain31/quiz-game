import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SciLevelPageRoutingModule } from './sci-level-routing.module';

import { SciLevelPage } from './sci-level.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SciLevelPageRoutingModule
  ],
  declarations: [SciLevelPage]
})
export class SciLevelPageModule {}
