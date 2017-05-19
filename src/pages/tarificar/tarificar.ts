import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController } from 'ionic-angular';
import { TranslateService } from 'ng2-translate/ng2-translate';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ServicioDatos } from '../../providers/servicio-datos';
import { ResultadoPage } from '../resultado/resultado';
import { MenuInicioPage } from '../menu-inicio/menu-inicio';

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

  menuInicioPage = MenuInicioPage;
  resultadoPage = ResultadoPage;
  form;
	contenido: string;
  tarif: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public servicioDatos: ServicioDatos, public translateService: TranslateService, public loadingController:LoadingController) {
	  
	this.contenido = this.navParams.get('tipoProducto');
	  
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TarificarPage');
  }
  
  goBack() {
    this.navCtrl.pop();
  }
  
  goRoot() {
	 this.navCtrl.setRoot(this.menuInicioPage);
   //this.navCtrl.remove(4,1).then(() => {this.navCtrl.remove(3,1).then(() => {this.navCtrl.pop();})});
  }
  goTar(){
   this.servicioDatos.getTemplate()
   .subscribe(data => {
				//data.coberturas.item[0].codigoCobertura=this.contenido;
				//data.coberturas.item[1].capitalAsegurado = 2000.0;
         		this.tarif = JSON.stringify(data);
			});
            
      let loader = this.loadingController.create({
            content: "Tarificando..."
          });

      loader.present().then(()=>

      this.servicioDatos.getTarificacion(this.tarif)
      .subscribe(data => {

        
         this.navCtrl.push(this.resultadoPage, {
                     resultado: data
                }).then(() => loader.dismiss());
              })
    );
      

      
  }

}
