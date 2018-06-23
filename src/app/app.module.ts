import { File } from '@ionic-native/file';
import { SQLite } from '@ionic-native/sqlite';
//import { LoginPage } from './../pages/login/login';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { BancoDadosProvider } from '../providers/banco-dados/banco-dados';
import { UsuarioProvider } from '../providers/usuario/usuario';
import { TarefasProvider } from '../providers/tarefas/tarefas';
import { EmailComposer } from '@ionic-native/email-composer';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import { GeolocalizacaoProvider } from '../providers/geolocalizacao/geolocalizacao';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    //LoginPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    //LoginPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    BancoDadosProvider,
    UsuarioProvider,
    SQLite,
    File,
    EmailComposer,
    TarefasProvider,
    BarcodeScanner,
    GeolocalizacaoProvider,
    Geolocation
  ]
})
export class AppModule {}
