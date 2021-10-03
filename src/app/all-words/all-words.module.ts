import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AllWordsPageRoutingModule } from './all-words-routing.module';

import { AllWordsPage } from './all-words.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AllWordsPageRoutingModule
  ],
  declarations: [AllWordsPage]
})
export class AllWordsPageModule {}
