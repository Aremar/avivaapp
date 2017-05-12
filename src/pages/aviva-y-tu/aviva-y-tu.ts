import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { TranslateService } from 'ng2-translate/ng2-translate';
import { ServicioDatos } from '../../providers/servicio-datos';

/*
  Generated class for the AvivaYTu page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-aviva-y-tu',
  templateUrl: 'aviva-y-tu.html'
})
export class AvivaYTuPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public servicioDatos: ServicioDatos, public translateService: TranslateService) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad AvivaYTuPage');
  }
  
  goBack() {
    this.navCtrl.pop();
  }
  
}
