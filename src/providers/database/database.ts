import { SQLite, SQLiteObject } from '@ionic-native/sqlite';
import { Injectable } from '@angular/core';

/*
  Generated class for the DatabaseProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class DatabaseProvider {

  constructor(private db: SQLite) {
  }

  openDatabase() {
    return this.db.create({
      name: 'paises.db',
      location: 'default'
    })
  }

  createDatabase() {
    return this.openDatabase().then((db: SQLiteObject) => {
      this.createTabelaPaises(db);
    })
  }

  createTabelaPaises(db: SQLiteObject) {
    let sql = 'CREATE TABLE IF NOT EXISTS pais (id INTEGER PRIMARY KEY AUTOINCREMENT, ' +
      'nome VARCHAR(200), capital VARCHAR(200), regiao VARCHAR(200), continente VARCHAR(200))';
    db.executeSql(sql, {});
  }

}
