import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Pais } from '../../modelo/pais';
import { PaisProvider } from '../../providers/pais/pais';
import { ToastController } from 'ionic-angular';

/**
 * Generated class for the AdicionaPaisPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-adiciona-pais',
  templateUrl: 'adiciona-pais.html',
})
export class AdicionaPaisPage {

  public pais: Pais;
  constructor(public navCtrl: NavController, public navParams: NavParams, public paisProvider: PaisProvider, private toastCtrl: ToastController) {
    this.pais = new Pais();
  }

  ionViewDidLoad() {
  }

  exibirToast(dados){
    let t = this.toastCtrl.create({
      message: dados,
      duration: 300,
      position: 'top'
    });
    t.present();
  }

  cadastraPais(){
    this.paisProvider.inserir(this.pais);
    this.exibirToast('Pais cadastrado com sucesso!')
    this.navCtrl.pop();
  }

}
