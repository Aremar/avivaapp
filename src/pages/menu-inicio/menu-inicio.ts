import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { TranslateService } from 'ng2-translate/ng2-translate'

import { ProductosPage } from '../productos/productos';
import { CuidamosDeTiPage } from '../cuidamos-de-ti/cuidamos-de-ti';
import { CorporacionPage } from '../corporacion/corporacion';
import { AvivaYTuPage } from '../aviva-y-tu/aviva-y-tu';
import { ServicioDatos } from '../../providers/servicio-datos';

/*
  Generated class for the MenuInicio page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/




@Component({

  templateUrl: 'menu-inicio.html'
})
export class MenuInicioPage {
	
	productosPage = ProductosPage;
	cuidamosDeTiPage = CuidamosDeTiPage;
	corporacionPage = CorporacionPage;
	avivaYTuPage = AvivaYTuPage;
	
	productos: string;
	
	temp;
	temp2;

  constructor(public navCtrl: NavController, public navParams: NavParams, public servicioDatos: ServicioDatos, public translateService: TranslateService) {
	
	this.servicioDatos.grantToken();
	//this.temp = this.servicioDatos.getAuthorize();
	this.temp = this.servicioDatos.getToken();
	
	let idioma = this.servicioDatos.getIdioma();
	this.translateService.use(idioma);

  }

  
  ionViewDidLoad() {
    console.log('ionViewDidLoad MenuInicioPage');
  }

}
