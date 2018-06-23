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
    console.log('Irei fazer Login', values)
    this.usuario.getUserLogin(values).then((res: any) => {
      this.navCtrl.setRoot(HomePage)
    }).catch((err) => {
      let alert = this.alertCtrl.create({
        title: 'Atenção',
        subTitle: 'Erro ao fazer Login! ' + JSON.stringify(err),
        buttons: 
        [       
          {
            text: 'OK'
          }
        ]
      })

      alert.present();
    })
  }

  cadastrarUsuario(){
    this.navCtrl.push('cadastroPage')
  }


}


