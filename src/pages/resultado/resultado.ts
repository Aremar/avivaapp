import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { TranslateService } from 'ng2-translate/ng2-translate';
import { ServicioDatos } from '../../providers/servicio-datos';
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
  importeAnual: number;
  primerRecibo: number;
  primaComercial: number;
  recargoFraccionamiento: number;
  totalImpuestos: number;
  fall: boolean;
  ipa: boolean;

  menuInicioPage = MenuInicioPage;

  constructor(public navCtrl: NavController, public navParams: NavParams, public servicioDatos: ServicioDatos, public translateService: TranslateService) {
     
     this.resultado = this.navParams.get('resultado');

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

}
