import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ServicioDatos } from '../../providers/servicio-datos';

import { MenuInicioPage } from '../menu-inicio/menu-inicio';

@Component({
  templateUrl: 'home.html'
})
export class HomePage {
	
	menuInicioPage = MenuInicioPage;
	
  constructor(public navCtrl: NavController, public navParams: NavParams, public servicioDatos: ServicioDatos) {
  }
  siguiente(idioma){
	  
	  this.servicioDatos.setIdioma(idioma);
	  this.navCtrl.push(this.menuInicioPage);

  }
}
