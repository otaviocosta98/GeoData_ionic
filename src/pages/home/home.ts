import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AdicionaPaisPage } from '../adiciona-pais/adiciona-pais';
import { ExibePaisesPage } from '../exibe-paises/exibe-paises';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  continente: any;
  constructor(public navCtrl: NavController) {

  }

  cadastrarPais() {
    this.navCtrl.push(AdicionaPaisPage);
  }

  exibirPaises() {
    this.navCtrl.push(ExibePaisesPage);
  }

}
