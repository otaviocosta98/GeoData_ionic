import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { PaisesPage } from '../paises/paises';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  continente: any;
  constructor(public navCtrl: NavController) {

  }

  listarPaises() {
    this.navCtrl.push(PaisesPage, {"continente": this.continente})
  }
}
