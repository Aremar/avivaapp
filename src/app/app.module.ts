import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { TranslateModule, TranslateStaticLoader, TranslateLoader } from 'ng2-translate';
import { Http } from '@angular/http';
import { HomePage } from '../pages/home/home';
import { ProductosPage } from '../pages/productos/productos';
import { MenuInicioPage } from '../pages/menu-inicio/menu-inicio';
import { CuidamosDeTiPage } from '../pages/cuidamos-de-ti/cuidamos-de-ti';
import { CorporacionPage } from '../pages/corporacion/corporacion';
import { AvivaYTuPage } from '../pages/aviva-y-tu/aviva-y-tu';
import { ClonPage } from '../pages/clon/clon';
import { TarificarPage } from '../pages/tarificar/tarificar';
import { ResultadoPage } from '../pages/resultado/resultado';
import { ServicioDatos } from '../providers/servicio-datos';
import { BaseDatos } from '../providers/base-datos';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import 'rxjs/add/operator/map';


export function createTranslateLoader(http: Http) {
    return new TranslateStaticLoader(http, 'assets/i18n', '.json');
}


@NgModule({
  declarations: [
    MyApp,
    HomePage,
	ProductosPage,
	MenuInicioPage,
	CuidamosDeTiPage,
	CorporacionPage,
	AvivaYTuPage,
	MenuInicioPage,
	ClonPage,
	TarificarPage,
  ResultadoPage
  ],
  imports: [
    IonicModule.forRoot(MyApp),
	TranslateModule.forRoot({
        provide: TranslateLoader,
        useFactory: (createTranslateLoader),
        deps: [Http] 
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
	ProductosPage,
	MenuInicioPage,
	CuidamosDeTiPage,
	CorporacionPage,
	AvivaYTuPage,
	MenuInicioPage,
	ClonPage,
	TarificarPage,
  ResultadoPage
  
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
	ServicioDatos,
	BaseDatos,
	SQLite
  ]
})
export class AppModule {}
