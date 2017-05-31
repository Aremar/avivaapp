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
	  
	  return this.db.executeSql("create table if not exists tarificaciones( id INTEGER PRIMARY KEY AUTOINCREMENT, producto TEXT, fecha TEXT, importe_anual REAL, cuota_mensual REAL, total_impuestos REAL, fallecimiento INTEGER, incapacidad INTEGER, json STRING)",{})
	  
  }
  public addTarificacion(tarificacion){
	  
	let sql = "INSERT INTO tarificaciones (producto, fecha, importe_anual, cuota_mensual, total_impuestos, fallecimiento, incapacidad, json) values (?,?,?,?,?,?,?,?)";
    return this.db.executeSql(sql,[tarificacion.product,tarificacion.date,tarificacion.cuota]);
	  
  }
  
  public getLista(){
	  
	let sql = "SELECT fecha, importe_anual, cuota_mensual, total_impuestos, fallecimiento, incapacidad FROM tarificaciones ORDER BY fecha DESC LIMIT 3";
	return this.db.executeSql(sql,{});
	  
  }
}
