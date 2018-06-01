import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { PaisProvider } from '../../providers/pais/pais';
import { Pais } from '../../modelo/pais';

/**
 * Generated class for the AtualizaPaisPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-atualiza-pais',
  templateUrl: 'atualiza-pais.html',
  providers: [
    PaisProvider
  ]
})
export class AtualizaPaisPage {
  public pais: Pais;
  constructor(public navCtrl: NavController, public navParams: NavParams, public paisProvider: PaisProvider, private toastCtrl: ToastController) {
    this.pais = this.navParams.data;
  }

  ionViewDidLoad() {
  }

  public atualizaPais() {
    this.paisProvider.atualizar(this.pais).then(() => {
      this.exibirToast('Pais atualizado com sucesso!')
      this.navCtrl.pop();
    });
  }

  exibirToast(dados) {
    let t = this.toastCtrl.create({
      message: dados,
      duration: 3000,
      position: "top"
    });
    t.present();
  }

}
