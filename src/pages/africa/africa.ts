import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AfricaDoSulPage } from '../africa-do-sul/africa-do-sul';
import { EgitoPage } from '../egito/egito';
import { MadagascarPage } from '../madagascar/madagascar';
import { CongoPage } from '../congo/congo';
import { NigeriaPage } from '../nigeria/nigeria';

/**
 * Generated class for the AfricaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-africa',
  templateUrl: 'africa.html',
})
export class AfricaPage {

  bandeiras:any[];
  nomes:any[];
  capital:any[];
  regiao:any[];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    this.bandeiras = [];
    this.nomes = ['Africa do Sul', 'Egito', 'Madagascar', 'Congo', 'Nigeria'];
    this.capital = ['Cidade do Cabo', 'Cairo', 'Antananarivo', 'Brazavile', 'Abuja'];
    this.regiao = ['Sul', 'Nordeste', 'Sudeste', 'Centro', 'Oeste'];
    console.log(this.nomes[0])
  }

  mostrarAfricaDoSul(){
    this.navCtrl.push(AfricaDoSulPage)
  }

  mostrarEgito(){
    this.navCtrl.push(EgitoPage)
  }

  mostrarMadagascar(){
    this.navCtrl.push(MadagascarPage)
  }

  mostrarCongo(){
    this.navCtrl.push(CongoPage)
  }

  mostrarNigeria(){
    this.navCtrl.push(NigeriaPage)
  }
}
