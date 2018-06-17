import { UsuarioProvider } from './../../providers/usuario/usuario';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { IonicPage, AlertController } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HomePage } from '../home/home';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  public loginForm: FormGroup;
  public resultado: String;
  

  constructor(public navCtrl: NavController, 
              public alertCtrl: AlertController,
              public Frb: FormBuilder,
              public usuario: UsuarioProvider
            ) 
    {
      
      this.loginForm = Frb.group({
        nomeUsuario: [null, [Validators.required]],
        senhaUsuario:  [null, [Validators.required]],
      });
    }

  showAlert(message) {
    let alert = this.alertCtrl.create
    ({
      title: 'Atenção',
      subTitle: message,
      buttons: 
      ['ok']
    });
    alert.present();
  }
  

  onSubmit(values) {
    if (values.nomeUsuario === 'unipam' && values.senhaUsuario === '123') {
      let alert = this.alertCtrl.create({
        title: 'Atenção',
        subTitle: 'Bem-vindo',
        buttons: 
        [
          {
            text: 'Sim',
            handler: () => {
              this.navCtrl.push(HomePage);
            }
          },
        
          
          {
            text: 'Não'
          }
        ]
      });
      alert.present();
      
    } else { 
      let alert = this.alertCtrl.create({
        title: 'Atenção',
        subTitle: 'Deu errado',
        buttons: 
        [
          {
            text: 'Ok'
          }
        ]
      });
      alert.present();
      
    }
    
  }

  cadastrarUsuario(){
    this.navCtrl.push('cadastroPage')
  }


}


