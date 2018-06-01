import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DatabaseProvider } from '../database/database';
import { Pais } from '../../modelo/pais';
import { SQLiteObject } from '@ionic-native/sqlite';

/*
  Generated class for the PaisProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class PaisProvider {

  constructor(private dbProvider: DatabaseProvider) {
  }

  public inserir(pais: Pais) {
    return this.dbProvider.openDatabase().then((db: SQLiteObject) => {
      let sql = 'INSERT INTO pais(nome, capital, regiao, continente) VALUES (?,?,?,?)';
      let parametros = [pais.nome, pais.capital, pais.regiao, pais.continente];
      return db.executeSql(sql, parametros)
        .catch((e) => {
          console.log(e);
        })
    }).catch((e) => {
      console.log(e);
    })
  }

  public listar() {
    return this.dbProvider.openDatabase().then((db: SQLiteObject) => {
      let sql = 'SELECT * FROM pais';
      return db.executeSql(sql, []).then((data: any) => {
        if (data.rows.lenght > 0) {
          let paises: Pais[] = [];
          for (let i = 0; i < data.rows.lenght; i++) {
            paises.push(data.rows.item(i));
          }
          return paises;
        } else {
          return [];
        }
      }).catch((e) => {
        console.log(e);
      })
    }).catch((e) => {
      console.log(e);
    })
  }

  public apagar(pais: Pais) {
    return this.dbProvider.openDatabase().then((db: SQLiteObject) => {
      let sql = 'DELETE FROM pais WHERE id = ?';
      let param = [pais.id];
      return db.executeSql(sql, param);
    })
  }

  public atualizar(pais: Pais) {
    return this.dbProvider.openDatabase().then((db: SQLiteObject) => {
      let sql = 'UPDATE pais SET nome = ?, capital = ?, regiao = ?, continente = ? WHERE id = ?';
      let param = [pais.nome, pais.capital, pais.regiao, pais.continente, pais.id]
      db.executeSql(sql, param);
    }).catch((e) => {
      console.log(e);
    }).catch((e) => {
      console.log(e);
    })
  }

}
