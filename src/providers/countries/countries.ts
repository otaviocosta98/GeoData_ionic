import { Http } from '@angular/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the CountriesProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class CountriesProvider {

  private BASE_URL_API = 'https://restcountries.eu/rest/v2/';

  constructor(public http: Http) {
    console.log('Hello CountriesProvider Provider');
  }

  getPaisesByRegion(region:string){
    return this.http.get(this.BASE_URL_API + 'region/' + region);
  }

}
