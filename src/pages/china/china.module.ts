import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ChinaPage } from './china';

@NgModule({
  declarations: [
    ChinaPage,
  ],
  imports: [
    IonicPageModule.forChild(ChinaPage),
  ],
})
export class ChinaPageModule {}
