import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AfricaPage } from '../africa/africa';
import { AmericaPage } from '../america/america';
import { AsiaPage } from '../asia/asia';
import { EuropaPage } from '../europa/europa';
import { OceaniaPage } from '../oceania/oceania';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  continente: any;
  constructor(public navCtrl: NavController) {

  }

  listarPaises(){
    if(this.continente == 'Africa'){
      this.navCtrl.push(AfricaPage)
    } else if(this.continente == 'Americas'){
      this.navCtrl.push(AmericaPage)
    } else if(this.continente == 'Asia'){
      this.navCtrl.push(AsiaPage)
    } else if(this.continente == 'Europa'){
      this.navCtrl.push(EuropaPage)
    } else if(this.continente == 'Oceania'){
      this.navCtrl.push(OceaniaPage)
    } 
  }
}
