import { UsuarioProvider } from './../../providers/usuario/usuario';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


/**
 * Generated class for the CadastraUsuarioPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-cadastra-usuario',
  templateUrl: 'cadastra-usuario.html',
})
export class CadastraUsuarioPage {
  
    nomeUsuario : String;
    senhaUsuario : String;
    
    constructor(public navCtrl: NavController, 
                public navParams: NavParams, 
                public usuario: UsuarioProvider) {
    }
  
    ionViewDidLoad() {
      console.log('ionViewDidLoad CadastroPage');
    }
  
    cadastraUsuario(){
      let cadastro = {
        nomeUsuario: this.nomeUsuario,
        senhaUsuario: this.senhaUsuario
      }
      this.usuario.criaUsuario(cadastro).then((item)=>{
        console.log('ionViewDidLoad CadastroPage', item);
        this.navCtrl.setRoot('LoginPage')
      }).catch((err)=>{
        console.log('ionViewDidLoad CadastroPage', err);
      })
    }


  voltarOpen(){
    this.navCtrl.push('OpenPage')
  }


}
