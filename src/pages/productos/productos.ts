import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { TranslateService } from 'ng2-translate/ng2-translate'

import { ServicioDatos } from '../../providers/servicio-datos';
import { ClonPage } from '../clon/clon';

/*
  Generated class for the Productos page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-productos',
  templateUrl: 'productos.html'
})
export class ProductosPage {
	
   clonPage = ClonPage;



  constructor(public navCtrl: NavController, public navParams: NavParams, public servicioDatos: ServicioDatos, public translateService: TranslateService) {
 
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProductosPage');
  }
  goBack() {
    this.navCtrl.pop();
  }
  producto(tipo){
	  
	  this.navCtrl.push(this.clonPage, {
      tipoProducto: tipo
    });
	  
  }
}
