//import { LoginPage } from './../login/login';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ListPage } from '../list/list';

/**
 * Generated class for the OpenPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-open',
  templateUrl: 'open.html',
})
export class OpenPage {

  constructor(public navCtrl: NavController, 
              public navParams: NavParams) {
  }


  carregarTelaLogin(){
    console.log('entrou');
    this.navCtrl.push('LoginPage')
  }

  carregarTelaCadastro(){
    this.navCtrl.setRoot('CadastraUsuarioPage')
  }

  carregarTelaList(){
    this.navCtrl.push(ListPage)
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad OpenPage');
  }

}
