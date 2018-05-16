import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { BrasilPage } from '../brasil/brasil';
import { UsaPage } from '../usa/usa';
import { ChilePage } from '../chile/chile';
import { UruguaiPage } from '../uruguai/uruguai';
import { ArgentinaPage } from '../argentina/argentina';

/**
 * Generated class for the AmericaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-america',
  templateUrl: 'america.html',
})
export class AmericaPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AmericaPage');
  }

  mostrarBrasil(){
    this.navCtrl.push(BrasilPage)
  }

  mostrarUSA(){
    this.navCtrl.push(UsaPage)
  }

  mostrarChile(){
    this.navCtrl.push(ChilePage)
  }

  mostrarUruguai(){
    this.navCtrl.push(UruguaiPage)
  }

  mostrarArgentina(){
    this.navCtrl.push(ArgentinaPage)
  }

}
