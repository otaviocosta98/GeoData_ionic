import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ChilePage } from './chile';

@NgModule({
  declarations: [
    ChilePage,
  ],
  imports: [
    IonicPageModule.forChild(ChilePage),
  ],
})
export class ChilePageModule {}
