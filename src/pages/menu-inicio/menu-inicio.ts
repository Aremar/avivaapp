import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { TranslateService } from 'ng2-translate/ng2-translate';
import { Platform } from 'ionic-angular';

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


declare var window: any;

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

  constructor(public navCtrl: NavController, public navParams: NavParams, public servicioDatos: ServicioDatos, public translateService: TranslateService, public platform: Platform) {
	
	this.servicioDatos.grantToken();
	
	
	let idioma = this.servicioDatos.getIdioma();
	this.translateService.use(idioma);

  }
	/*pruebas con InAppBrowser para usar OAuth2
  pruebasToken() {
		this.platform.ready().then(() => {
        this.pillaAccess().then(success => {
            this.temp = success.code;
        }, (error) => {
            alert(error);
        });
    });


  }

  pillaAccess(): Promise<any> {
		return new Promise(function(resolve, reject) {
				let accessURL = 'http://10.118.21.98:8080' + '/tarificador/oauth/authorize?response_type=code&redirect_uri=http://localhost/callback&client_id=' + 'afbda9276ea24ef2bc31e40ed9dfebeb';
        let browserRef = window.cordova.InAppBrowser.open(accessURL, "_blank", "location=no");
				browserRef.addEventListener("loadstart", (event) => {
				if ((event.url).indexOf("http://localhost/callback") === 0) {
					browserRef.removeEventListener("exit", (event) => {});
					browserRef.close();
					var responseParameters = ((event.url).split("#")[1]).split("&");
					var parsedResponse = {};
					for (var i = 0; i < responseParameters.length; i++) {
						parsedResponse[responseParameters[i].split("=")[0]] = responseParameters[i].split("=")[1];
					}
					if (parsedResponse["code"] !== undefined && parsedResponse["code"] !== null) {
						resolve(parsedResponse);
					} else {
						reject("Problem authenticating with OAuth");
					}
				}
        });
        browserRef.addEventListener("exit", function(event) {
            reject("The OAuth authentication flow was canceled");
        });
    });
  }*/


  ionViewDidLoad() {
    console.log('ionViewDidLoad MenuInicioPage');
  }

}
