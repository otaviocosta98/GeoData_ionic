import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AustraliaPage } from '../australia/australia';
import { NovaZelandiaPage } from '../nova-zelandia/nova-zelandia';
import { IndonesiaPage } from '../indonesia/indonesia';
import { SamoaPage } from '../samoa/samoa';
import { FujiPage } from '../fuji/fuji';

/**
 * Generated class for the OceaniaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-oceania',
  templateUrl: 'oceania.html',
})
export class OceaniaPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad OceaniaPage');
  }

  mostrarAustralia(){
    this.navCtrl.push(AustraliaPage)
  }

  mostrarNovaZelandia(){
    this.navCtrl.push(NovaZelandiaPage)
  }

  mostrarIndonesia(){
    this.navCtrl.push(IndonesiaPage)
  }

  mostrarSamoa(){
    this.navCtrl.push(SamoaPage)
  }

  mostrarFuji(){
    this.navCtrl.push(FujiPage)
  }
}
