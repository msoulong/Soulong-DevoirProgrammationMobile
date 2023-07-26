import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BibleversePageRoutingModule } from './bibleverse-routing.module';

import { BibleversePage } from './bibleverse.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BibleversePageRoutingModule
  ],
  declarations: [BibleversePage]
})
export class BibleversePageModule {}
