import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TarefasProvider } from '../../../providers/tarefas/tarefas';
import { AlertController } from 'ionic-angular/components/alert/alert-controller';
import { HomePage } from '../home';
import { Camera, CameraOptions } from '@ionic-native/camera';

@IonicPage()
@Component({
  selector: 'page-criar-tarefa',
  templateUrl: 'criar-tarefa.html',
})
export class CriarTarefaPage {
  public CategoriaTarefa: any;
  public ItemTarefa: any;
  public fotoItem: any;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams, 
    public tarefaProvider: TarefasProvider,
    public alertCtrl: AlertController,
    public camera: Camera,) {
  }
  

  ionViewDidLoad() {
     console.log('ionViewDidLoad CriarTarefaPage');
      }

  addTarefaTexto () {
    let criaTarefaTexto = {
      tarefa: this.CategoriaTarefa,
      item: this.ItemTarefa,
    }
    this.tarefaProvider.criaTarefaTexto(criaTarefaTexto).then((res) => {
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

  salvarFotoTarefa () {
    let options: CameraOptions = {
      targetWidth: 800,
      targetHeight: 600,
      quality: 50,
      correctOrientation: true,
      saveToPhotoAlbum:true,
      encodingType: this.camera.EncodingType.JPEG,
      destinationType: this.camera.DestinationType.DATA_URL,
      sourceType: this.camera.PictureSourceType.CAMERA
      
    }
    this.camera.getPicture(options).then(res => {
      let fotoBase64 = `data:image/jpeg;base64,${res}`
      let criaTarefaTexto = {
        tarefa: this.CategoriaTarefa,
        foto: fotoBase64
      }
      this.tarefaProvider.criaTarefaFoto(criaTarefaTexto)
    }).catch(err => {
      console.log(err)
    })
  }

}
