import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { TranslateService } from 'ng2-translate/ng2-translate';

import { TarificarPage } from '../tarificar/tarificar';
import { ServicioDatos } from '../../providers/servicio-datos';
import { MenuInicioPage } from '../menu-inicio/menu-inicio';


/*
  Generated class for the Clon page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-clon',
  templateUrl: 'clon.html'
})
export class ClonPage {

	contenido: string;
  tipo: string;
  vital: boolean;
  vida: boolean;
  ul:boolean;
  pensiones: boolean;
  imagen: string;
	
	tarificarPage = TarificarPage;
  menuInicioPage = MenuInicioPage;

  constructor(public navCtrl: NavController, public navParams: NavParams, public servicioDatos: ServicioDatos, public translateService: TranslateService) {
	  
	
	this.tipo = this.navParams.get('tipoProducto');
	
	  
	if(this.tipo === 'vital'){
		this.contenido = 'Bienvenido a Aviva Vital';
    this.imagen = "assets/images/productos-seguros-salud.jpg";
	} else if(this.tipo === 'vidaentera'){	
		this.contenido = 'Bienvenido a Aviva Vida Entera';
    this.imagen="assets/images/productos-seguros-vida.jpg";
	} else if(this.tipo === 'unitlinked'){	
		this.contenido = 'Bienvenido a Fondos de Inversión';
    this.imagen="assets/images/productos-fondos-inversion.jpg";
	} else if(this.tipo === 'pensiones'){	
		this.contenido = 'Bienvenido a tu Plan de Pensiones';
    this.imagen="assets/images/productos-planes-pensiones.jpg";
	}

	  
	
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ClonPage');
  }
  
  goBack() {
    this.navCtrl.pop();
  }
  
  goRoot() {
    this.navCtrl.setRoot(this.menuInicioPage);
	 //this.navCtrl.remove(3,1).then(() => {this.navCtrl.pop();});
  }
	
  goTarificar() {
	this.navCtrl.push(this.tarificarPage, this.navParams);
  }
}
