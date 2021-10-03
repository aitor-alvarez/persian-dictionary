import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AllWordsPage } from './all-words.page';

const routes: Routes = [
  {
    path: '',
    component: AllWordsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AllWordsPageRoutingModule {}
