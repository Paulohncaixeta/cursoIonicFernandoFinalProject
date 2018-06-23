import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CodigoBarrasPage } from './codigo-barras';

@NgModule({
  declarations: [
    CodigoBarrasPage,
  ],
  imports: [
    IonicPageModule.forChild(CodigoBarrasPage),
  ],
})
export class CodigoBarrasPageModule {}
