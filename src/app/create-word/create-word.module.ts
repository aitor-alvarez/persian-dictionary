  import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CreateWordPageRoutingModule } from './create-word-routing.module';

import { CreateWordPage } from './create-word.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    CreateWordPageRoutingModule
  ],
  declarations: [CreateWordPage]
})
export class CreateWordPageModule {}
