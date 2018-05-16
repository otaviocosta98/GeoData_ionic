import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { UsaPage } from './usa';

@NgModule({
  declarations: [
    UsaPage,
  ],
  imports: [
    IonicPageModule.forChild(UsaPage),
  ],
})
export class UsaPageModule {}
