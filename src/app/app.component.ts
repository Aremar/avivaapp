import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { TranslateService } from 'ng2-translate'
import { ServicioDatos } from '../providers/servicio-datos';
import { BaseDatos } from '../providers/base-datos';

import { HomePage } from '../pages/home/home';
import 'rxjs/add/operator/map';

@Component({
  templateUrl: 'app.html',
  providers: [ServicioDatos]
})
export class MyApp {
  rootPage:any = HomePage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, public baseDatos: BaseDatos, public translateService: TranslateService) {
    this.translateService.setDefaultLang('esGB');
    this.translateService.use('esGB');
	
	platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
	  this.baseDatos.abrirBD()
       .then(() => this.baseDatos.createTableTarificaciones())
    });
  }
}
