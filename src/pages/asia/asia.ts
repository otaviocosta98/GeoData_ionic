import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { JapaoPage } from '../japao/japao';
import { CoreiaPage } from '../coreia/coreia';
import { TailandiaPage } from '../tailandia/tailandia';
import { IndiaPage } from '../india/india';
import { ChinaPage } from '../china/china';

/**
 * Generated class for the AsiaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-asia',
  templateUrl: 'asia.html',
})
export class AsiaPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AsiaPage');
  }

  mostrarJapao(){
    this.navCtrl.push(JapaoPage)
  }

  mostrarCoreia(){
    this.navCtrl.push(CoreiaPage)
  }

  mostrarTailandia(){
    this.navCtrl.push(TailandiaPage)
  }

  mostrarIndia(){
    this.navCtrl.push(IndiaPage)
  }

  mostrarChina(){
    this.navCtrl.push(ChinaPage)
  }

}
