import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { TranslateService } from 'ng2-translate/ng2-translate';
import { ServicioDatos } from '../../providers/servicio-datos';
import { BaseDatos } from '../../providers/base-datos';
import { MenuInicioPage } from '../menu-inicio/menu-inicio';

/*
  Generated class for the Resultado page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-resultado',
  templateUrl: 'resultado.html'
})
export class ResultadoPage {

  resultado: any;
  anteriores: any;
  producto: string;
  fecha: string;
  importeAnual: number;
  primerRecibo: number;
  primaComercial: number;
  recargoFraccionamiento: number;
  totalImpuestos: number;
  fall: boolean;
  ipa: boolean;

  menuInicioPage = MenuInicioPage;

  constructor(public navCtrl: NavController, public navParams: NavParams, public servicioDatos: ServicioDatos, public translateService: TranslateService, public db: BaseDatos) {
     
     this.resultado = this.navParams.get('resultado');
     this.producto = this.navParams.get('producto');
     this.fecha = this.navParams.get('fechatar');
     this.importeAnual = this.resultado.datos.conceptosEconomicosTotalizados.primaComercial;
     this.primerRecibo = this.resultado.datos.importePrimerRecibo;
     this.primaComercial = this.resultado.datos.conceptosEconomicosTotalizados.primaComercial;
     this.totalImpuestos = this.resultado.datos.conceptosEconomicosTotalizados.totalImpuestos;
     this.fall = this.navParams.get('fallecimiento');
     this.ipa = this.navParams.get('incapacidad');

  }
  goRoot() {
    this.navCtrl.setRoot(this.menuInicioPage);
	 //this.navCtrl.remove(5,1).then(() => {this.navCtrl.remove(4,1).then(() => {this.navCtrl.remove(3,1).then(() => {this.navCtrl.pop();})})});
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ResultadoPage');
  }
  ionViewDidEnter(){
    this.db.getLista().then((res)=>{
      this.anteriores = [];
      for(var i = 0; i < res.rows.length; i++){ //fecha, importe_anual, cuota_mensual, total_impuestos, fallecimiento, incapacidad
          this.anteriores.push({ 
            fecha: res.rows.item(i).fecha, 
            importe: res.rows.item(i).importe_anual, 
            cuota: res.rows.item(i).cuota_mensual,
            impuestos: res.rows.item(i).total_impuestos,
            fall: res.rows.item(i).fallecimiento,
            ipa: res.rows.item(i).incapacidad
          });
    }

    },(err)=>{ alert('error al obtener datos de la bd'+err) })
   }
   ionViewWillLeave(){
    //producto, fecha, importe_anual, cuota_mensual, total_impuestos, fallecimiento, incapacidad, json
      let tarificacion = {
          producto: this.producto,
          fecha: this.fecha,
          importe_anual: this.importeAnual,
          cuota_mensual: this.primerRecibo,
          total_impuestos: this.totalImpuestos,
          fallecimiento: this.fall,
          incapacidad: this.ipa,
          json: this.resultado.toString()
      }

      this.db.addTarificacion(tarificacion).then(()=> {alert("Se ha introducido correctamente la tarificación en la base de datos")
    },(err)=>{ alert('error al guardar datos de la bd'+err) }
    );

   }

}
