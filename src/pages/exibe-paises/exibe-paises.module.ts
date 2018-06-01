import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ExibePaisesPage } from './exibe-paises';

@NgModule({
  declarations: [
    ExibePaisesPage,
  ],
  imports: [
    IonicPageModule.forChild(ExibePaisesPage),
  ],
})
export class ExibePaisesPageModule {}
