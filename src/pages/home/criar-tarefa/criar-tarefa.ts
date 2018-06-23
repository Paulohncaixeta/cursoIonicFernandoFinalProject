import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TarefasProvider } from '../../../providers/tarefas/tarefas';
import { AlertController } from 'ionic-angular/components/alert/alert-controller';
import { HomePage } from '../home';

@IonicPage()
@Component({
  selector: 'page-criar-tarefa',
  templateUrl: 'criar-tarefa.html',
})
export class CriarTarefaPage {
  public CategoriaTarefa: any;
  public ItemTarefa: any;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams, 
    public tarefaProvider: TarefasProvider,
    public alertCtrl: AlertController) {
  }
  

  ionViewDidLoad() {
     console.log('ionViewDidLoad CriarTarefaPage');
      }

  addTarefaTexto () {
    let criaTarefaTexto = {
      tarefa: this.CategoriaTarefa,
      item: this.ItemTarefa,
    }
    this.tarefaProvider.criaTarefa(criaTarefaTexto).then((res) => {
      this.navCtrl.setRoot(HomePage)
    }).catch((err) => {
      let alert = this.alertCtrl.create({
        title: 'Atenção',
        subTitle: 'Erro ao criar tarefa! ' + JSON.stringify(err),
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

  addTarefaPhoto () {
    let criaTarefaTexto = {
      tarefa: this.CategoriaTarefa,
      item: this.ItemTarefa,
    }
    this.tarefaProvider.criaTarefa(criaTarefaTexto).then((res) => {
      this.navCtrl.setRoot(HomePage)
    }).catch((err) => {
      let alert = this.alertCtrl.create({
        title: 'Atenção',
        subTitle: 'Erro ao criar tarefa! ' + JSON.stringify(err),
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

}
