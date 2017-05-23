import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController } from 'ionic-angular';
import { TranslateService } from 'ng2-translate/ng2-translate';
import { FormBuilder, Validators } from '@angular/forms';
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
  form: any;
	contenido: string;
  tarif: any;
  date: string;
  efecto: string;
  period: string;
  statFall: boolean = false;
  statIpa: boolean = false;

  constructor(public navCtrl: NavController, public navParams: NavParams, public servicioDatos: ServicioDatos, public translateService: TranslateService, public loadingController:LoadingController, public formBuilder: FormBuilder) {
	  
	this.contenido = this.navParams.get('tipoProducto');
  this.date = new Date().toISOString();
  this.efecto = this.date.slice(0, -1) + "+0000";
  //this.date = base.getFullYear() + "-" +base.getMonth()+ "-" +base.getDay();
  this.form = this.formBuilder.group({
      'fallecimiento': false,
      'fallecimientoCapital': 0,
      'incapacidadPA': false,
      'incapacidadPACapital': 0,
      'fechaNac': [this.date,Validators.required],
      'pago': ['ME',Validators.required]
  });
	  
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

   
   if (this.form.value.fallecimiento == false && this.form.value.incapacidadPA == false){

     alert("Seleccione al menos una cobertura.");
   }

   else if ((this.form.value.fallecimiento == true && this.form.value.fallecimientoCapital <= 0)||(this.form.value.incapacidadPA == true && this.form.value.incapacidadPACapital <=0)){

    alert("Introduzca la cantidad a asegurar por cada cobertura seleccionada.");
   }
   else if (this.form.value.fechaNac > this.date){

    alert("La fecha de nacimiento es superior a la actual.");

   }

   else{
    let temp =this.form.value.fechaNac.slice(0, -1) + "+0000";
      
   this.servicioDatos.getTemplate()
   .subscribe(data => {
        data.asegurado.fechaNacimiento = temp;
        data.fechaEfecto = this.efecto;
        data.periodicidadPago = this.form.value.pago;
				data.coberturas.item[0].capitalAsegurado = this.form.value.fallecimientoCapital;
				data.coberturas.item[1].capitalAsegurado = this.form.value.incapacidadPACapital;
         		this.tarif = JSON.stringify(data);
			});
            
      let loader = this.loadingController.create({
            content: "Tarificando..."
          });

      loader.present().then(()=>

      this.servicioDatos.getTarificacion(this.tarif)
      .subscribe(data => {
         this.navCtrl.push(this.resultadoPage, {
                     resultado: data,
                     fallecimiento: this.form.value.fallecimiento,
                     incapacidad: this.form.value.incapacidadPA
                }).then(() => loader.dismiss());
              })
    );
      

      
  }
  }
}
