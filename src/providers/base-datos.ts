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
       alert("la bd esta creada");
    })  
  }
  
  public createTableTarificaciones(){
	  
	  return this.db.executeSql("CREATE TABLE IF NOT EXISTS tarificaciones( id INTEGER PRIMARY KEY AUTOINCREMENT, producto TEXT, fecha TEXT, importe_anual REAL, cuota_mensual REAL, total_impuestos REAL, fallecimiento INTEGER, incapacidad INTEGER, json TEXT)",{})
	  
  }
  public addTarificacion(tarificacion){
	  
	let sql = "INSERT INTO tarificaciones (producto, fecha, importe_anual, cuota_mensual, total_impuestos, fallecimiento, incapacidad, json) values (?,?,?,?,?,?,?,?)";
    return this.db.executeSql(sql,[tarificacion.producto,tarificacion.fecha,tarificacion.importe_anual,tarificacion.cuota_mensual,tarificacion.total_impuestos,tarificacion.fallecimiento,tarificacion.incapacidad,tarificacion.json]);
	  
  }
  public addBase(){
    let sql = "INSERT INTO tarificaciones (producto, fecha, importe_anual, cuota_mensual, total_impuestos, fallecimiento, incapacidad, json) values ('prueba','2016-05-01T00:00:00.000Z,120,20,5,1,1,'aquivajson')";
    return this.db.executeSql(sql,{}); 
  
  }
  
  public getLista(){
	  
	let sql = "SELECT * FROM tarificaciones";// ORDER BY fecha DESC LIMIT 3
	return this.db.executeSql(sql,{});
	  
  }
}
