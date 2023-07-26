import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BibleversePage } from './bibleverse.page';

const routes: Routes = [
  {
    path: '',
    component: BibleversePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BibleversePageRoutingModule {}
