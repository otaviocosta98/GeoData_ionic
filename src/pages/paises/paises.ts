import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Pais } from '../../model/Pais';
import { PaisPage } from '../pais/pais';
import { CountriesProvider } from '../../providers/countries/countries';

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
  providers: [
    CountriesProvider
  ]
})
export class PaisesPage {
  public lista_paises = new Array<any>();
  constructor(public navCtrl: NavController, public navParams: NavParams, private countriesProvider: CountriesProvider) {
  }

  ionViewDidLoad() {
    this.countriesProvider.getPaisesByRegion(this.navParams.get('continente')).subscribe(
      data => {
        const response = data as any;
        this.lista_paises = JSON.parse(response._body);
      }, error => {
        console.log(error)
      }
    )
  }

  goToPaisDetails(pais: Pais): void {
    this.navCtrl.push(PaisPage, { "pais": pais })
  }

}
