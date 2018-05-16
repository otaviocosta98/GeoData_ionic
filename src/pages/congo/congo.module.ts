import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CongoPage } from './congo';

@NgModule({
  declarations: [
    CongoPage,
  ],
  imports: [
    IonicPageModule.forChild(CongoPage),
  ],
})
export class CongoPageModule {}
