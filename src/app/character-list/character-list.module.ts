import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CharacterListPageRoutingModule } from './character-list-routing.module';

import { CharacterListPage } from './character-list.page';
import { PipesModule } from '../pipes/pipes.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CharacterListPageRoutingModule,
    PipesModule
  ],
  declarations: [CharacterListPage]
})
export class CharacterListPageModule {}
