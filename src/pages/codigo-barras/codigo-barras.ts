import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';

/**
 * Generated class for the CodigoBarrasPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-codigo-barras',
  templateUrl: 'codigo-barras.html',
})
export class CodigoBarrasPage {

  
  retorno : any;
  formato : any

  constructor(public navCtrl: NavController, 
              private barcodeScanner: BarcodeScanner,
              private AlertCtrl: AlertController) {

  }

  ler(){
    this.barcodeScanner.scan(
      {
        "prompt" : "Posicione a leitora sobre o codigo de barras",
        "orientation" : "Landscape"
      })
      .then(barcodeData => {
        this.retorno = barcodeData.text;
        this.formato = barcodeData.format;
      })
      .catch(err => {
        this.showAlert(err);
      });
  }

  showAlert(mensagem) {
    let alert = this.AlertCtrl.create({
      title: 'Atenção',
      buttons:['ok']
    });
    alert.present();
  }


}
