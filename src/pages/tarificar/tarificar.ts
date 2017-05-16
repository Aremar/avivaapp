import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { TranslateService } from 'ng2-translate/ng2-translate';
import { ServicioDatos } from '../../providers/servicio-datos';

/*
  Generated class for the Tarificar page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-tarificar',
  templateUrl: 'tarificar.html'
})
export class TarificarPage {

	contenido: string;
  tarif: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public servicioDatos: ServicioDatos, public translateService: TranslateService) {
	  
	this.contenido = this.navParams.get('tipoProducto');
	  
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TarificarPage');
  }
  
  goBack() {
    this.navCtrl.pop();
  }
  
  goRoot() {
	 this.navCtrl.remove(4,1).then(() => {this.navCtrl.remove(3,1).then(() => {this.navCtrl.pop();})});
  }
  goTar(){
   this.servicioDatos.getTemplate()
   .subscribe(data => {
				data.coberturas.item[0].codigoCobertura=this.contenido;
				data.coberturas.item[1].capitalAsegurado = 2000.0;
         		this.tarif = data;
			});
   
  }

}
