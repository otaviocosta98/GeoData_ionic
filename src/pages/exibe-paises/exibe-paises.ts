import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { Pais } from '../../modelo/pais';
import { PaisProvider } from '../../providers/pais/pais';
import { AtualizaPaisPage } from '../atualiza-pais/atualiza-pais';

/**
 * Generated class for the ExibePaisesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-exibe-paises',
  templateUrl: 'exibe-paises.html',
})
export class ExibePaisesPage {
  public paises: Pais[];
  constructor(public navCtrl: NavController, public navParams: NavParams, public paisProvider: PaisProvider, private toastCtrl: ToastController) {
  }

  ionViewDidLoad() {
    this.paisProvider.listar().then((pais: Pais[]) => {
      this.paises = pais;
    })
  }

  apagarPais(pais: Pais) {
    this.paisProvider.apagar(pais);
    this.exibirToast('Pais apagado com sucesso!');
    this.paisProvider.listar().then((pais: Pais[]) => {
      this.paises = pais;
    })
  }

  atualizaPais(pais: Pais) {
    this.navCtrl.push(AtualizaPaisPage, pais);
  }

  exibirToast(dados) {
    let t = this.toastCtrl.create({
      message: dados,
      duration: 300,
      position: 'top'
    });
    t.present();
  }
}
