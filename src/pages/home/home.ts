import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { PaisesPage } from '../paises/paises';
import { CountriesProvider } from '../../providers/countries/countries';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers: [
    CountriesProvider
  ]
})
export class HomePage {

  continente: any;
  constructor(public navCtrl: NavController) {

  }

  listarPaises() {
    this.navCtrl.push(PaisesPage, {"continente": this.continente})
  }
}
