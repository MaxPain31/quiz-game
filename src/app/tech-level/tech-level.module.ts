import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TechLevelPageRoutingModule } from './tech-level-routing.module';

import { TechLevelPage } from './tech-level.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TechLevelPageRoutingModule
  ],
  declarations: [TechLevelPage]
})
export class TechLevelPageModule {}
