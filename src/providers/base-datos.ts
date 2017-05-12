import { Injectable } from '@angular/core';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite';


/*
  Generated class for the BaseDatos provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class BaseDatos {
	
  db: SQLiteObject = null;
  
  constructor(public sqlite: SQLite) {
  }
  
  public abrirBD(){
	return this.sqlite.create({
          name: 'data.db',
          location: 'default'
      })
      .then((db: SQLiteObject) => {
       this.db = db;
    })  
  }
  
  public createTableTarificaciones(){
	  
	  return this.db.executeSql("create table if not exists tarificaciones( id INTEGER PRIMARY KEY AUTOINCREMENT, producto TEXT, fecha TEXT, cuota_mensual REAL)",{})
	  
  }
  public addTarificacion(product, date, cuota){
	  
	let sql = "INSERT INTO tarificaciones (producto, fecha, cuota_mensual) values (?,?,?)";
    return this.db.executeSql(sql,[product,date,cuota]);
	  
  }
  
  public getLista(){
	  
	let sql = "SELECT * FROM tarificaciones ORDER BY fecha DESC LIMIT 3";
	return this.db.executeSql(sql,{});
	  
  }
}
