import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CreateWordPage } from './create-word.page';

const routes: Routes = [
  {
    path: '',
    component: CreateWordPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CreateWordPageRoutingModule {}
