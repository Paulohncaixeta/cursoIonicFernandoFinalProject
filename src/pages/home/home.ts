import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  addItem() {
    console.log('err')
    this.navCtrl.push('CriarTarefaPage') 
    console.log('err2')
  }
 
}
