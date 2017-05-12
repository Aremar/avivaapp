import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { TranslateService } from 'ng2-translate/ng2-translate';

import { ServicioDatos } from '../../providers/servicio-datos';

/*
  Generated class for the Corporacion page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-corporacion',
  templateUrl: 'corporacion.html'
})
export class CorporacionPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public servicioDatos: ServicioDatos, public translateService: TranslateService) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad CorporacionPage');
  }
  
  goBack() {
    this.navCtrl.pop();
  }

}
