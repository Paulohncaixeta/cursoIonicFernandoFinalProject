import { BancoDadosProvider } from './../providers/banco-dados/banco-dados';
import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { ListPage } from '../pages/list/list';
//import { LoginPage } from '../pages/login/login';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = 'OpenPage';

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, 
              public statusBar: StatusBar, 
              public splashScreen: SplashScreen,
              public bancoDadosProvider: BancoDadosProvider) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    bancoDadosProvider.createDatabase()

    this.pages = [
      { title: 'List',      component: ListPage },
      { title: 'Cadastro',  component: 'CadastroPage'},
      { title: 'Open',      component: 'OpenPage'},
      { title: 'Login',     component: 'LoginPage'},
      { title: 'Geo',       component: 'GeolocalizacaoPage'},
      { title: 'CodBar',    component: 'CodigoBarrasPage'},
      { title: 'ArqTexto',  component: 'ArquivoTextoPage'},
      

    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
