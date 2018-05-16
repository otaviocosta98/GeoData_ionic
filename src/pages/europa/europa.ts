import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AlemanhaPage } from '../alemanha/alemanha';
import { InglaterraPage } from '../inglaterra/inglaterra';
import { FinlandiaPage } from '../finlandia/finlandia';
import { DinamarcaPage } from '../dinamarca/dinamarca';
import { FrancaPage } from '../franca/franca';

/**
 * Generated class for the EuropaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-europa',
  templateUrl: 'europa.html',
})
export class EuropaPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EuropaPage');
  }

  mostrarAlemanha(){
    this.navCtrl.push(AlemanhaPage)
  }

  mostrarInglaterra(){
    this.navCtrl.push(InglaterraPage)
  }

  mostrarFinlandia(){
    this.navCtrl.push(FinlandiaPage)
  }

  mostrarDinamarca(){
    this.navCtrl.push(DinamarcaPage)
  }

  mostrarFranca(){
    this.navCtrl.push(FrancaPage)
  }

}
