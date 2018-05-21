import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Pais } from '../../model/Pais';
import { PaisPage } from '../pais/pais';

/**
 * Generated class for the PaisesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-paises',
  templateUrl: 'paises.html',
})
export class PaisesPage {
  public paises: Pais[];
  p1: any;
  p2: any;
  p3: any;
  p4: any;
  p5: any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    if (navParams.get('continente') == 'Asia') {
      this.p1 = { nome: 'China', capital: 'Pequim', regiao: 'Pequim', bandeira: 'chi.jpg' };
      this.p2 = { nome: 'Coréia do Sul', capital: 'Seul', regiao: 'Sul', bandeira: 'cor.png' };
      this.p3 = { nome: 'Índia', capital: 'Nova Deli', regiao: 'Sul', bandeira: 'ind.png' };
      this.p4 = { nome: 'Japão', capital: 'Tokyo', regiao: 'Leste', bandeira: 'jap.png' };
      this.p5 = { nome: 'Tailândia', capital: 'Bangkok', regiao: 'Leste', bandeira: 'tai.png' };

    } else if (navParams.get('continente') == 'Europa') {
      this.p1 = { nome: 'Alemanha', capital: 'Berlim', regiao: 'Centro', bandeira: 'ale.png' };
      this.p2 = { nome: 'Dinamarca', capital: 'Copenhague', regiao: 'Norte', bandeira: 'din.png' };
      this.p3 = { nome: 'Finlândia', capital: 'Helsínquia', regiao: 'Sul', bandeira: 'fin.png' };
      this.p4 = { nome: 'França', capital: 'Paris', regiao: 'Sul', bandeira: 'fra.jpg' };
      this.p5 = { nome: 'Inglaterra', capital: 'Londres', regiao: 'Norte', bandeira: 'ing.jpg' };

    } else if (navParams.get('continente') == 'Africa') {
      this.p1 = { nome: 'Africa do Sul', capital: 'Cidade do Cabo', regiao: 'Sul', bandeira: 'afr.png' };
      this.p2 = { nome: 'Congo', capital: 'Brazavile', regiao: 'Centro', bandeira: 'cog.png' };
      this.p3 = { nome: 'Egito', capital: 'Cairo', regiao: 'Nordeste', bandeira: 'egt.png' };
      this.p4 = { nome: 'Madagascar', capital: 'Antananarivo', regiao: 'Sudeste', bandeira: 'mdg.png' };
      this.p5 = { nome: 'Nigeria', capital: 'Abuja', regiao: 'Oeste', bandeira: 'nga.png' };

    } else if (navParams.get('continente') == 'Americas') {
      this.p1 = { nome: 'Argentina', capital: 'Buenos Aires', regiao: 'Sul', bandeira: 'arg.png' };
      this.p2 = { nome: 'Brasil', capital: 'Brasília', regiao: 'Leste', bandeira: 'bra.png' };
      this.p3 = { nome: 'Chile', capital: 'Santiago', regiao: 'Oeste', bandeira: 'chi.png' };
      this.p4 = { nome: 'Uruguai', capital: 'Montevidéu', regiao: 'Sudeste', bandeira: 'uru.png' };
      this.p5 = { nome: 'Estados Unidos', capital: 'Washington D.C.', regiao: 'Central', bandeira: 'usa.png' };

    } else if (navParams.get('continente') == 'Oceania') {
      this.p1 = { nome: 'Austrália', capital: 'Camberra', regiao: 'Sul', bandeira: 'aus.png' };
      this.p2 = { nome: 'Fiji', capital: 'Suva', regiao: 'Leste', bandeira: 'fij.png' };
      this.p3 = { nome: 'Nova Zelândia', capital: 'Wellington', regiao: 'Sudeste', bandeira: 'nov.png' };
      this.p4 = { nome: 'Samoa', capital: 'Apia', regiao: 'Centro-Sul', bandeira: 'san.png' };
      this.p5 = { nome: 'Indonésia', capital: 'Jacarta', regiao: 'Norte', bandeira: 'ind.png' };
    }
    this.paises = [this.p1, this.p2, this.p3, this.p4, this.p5];
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PaisesPage');
  }

  goToPaisDetails(pais: Pais): void {
    this.navCtrl.push(PaisPage, { "pais": pais })
  }

}
