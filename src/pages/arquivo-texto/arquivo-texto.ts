import { Component } from '@angular/core';
import {IonicPage, NavController, AlertController} from 'ionic-angular';
import {File} from '@ionic-native/file';
import {EmailComposer} from '@ionic-native/email-composer';

/**
 * Generated class for the ArquivoTextoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-arquivo-texto',
  templateUrl: 'arquivo-texto.html',
})
export class ArquivoTextoPage {

erroTela : any = '';
retorno1 : any = '';
retorno2 : any = '';
retorno3 : any = '';
nativeURL : any = '';
conteudoArquivo : any = ''; 

retorno4: any = '';

//para efetivar dependencia injecition é preciso chamar no construtor os imports
constructor(public navCtrl: NavController,
  private alertCtrl : AlertController,
  private file : File, 
  private emailComposer: EmailComposer) {

}

enviar(){
  
  
  let texto : string = "";

  texto = "Texto do arquivo a ser enviado";
 
 let path = this.file.dataDirectory;
 let arquivo = 'teste.txt';

 this.file.createFile(path, arquivo, true)
    .then( (ok) => 
          {              
           this.retorno1 = JSON.stringify(ok);
           },
      (err)=> {
               this.alerta(err.code.toString() + " " + 
                           err.message.toString(), "Atenção" );
               this.erroTela = "Erro no procesasmento: " + JSON.stringify(err);
              })
    .catch((err) => {
      console.log(err);
      this.alerta("Erro Write" + err.toString(), "Atenção");
    });


  texto = texto + ". Novas informações no texto";

  this.file.writeFile(path, arquivo, texto, {replace: true})
    .then( (ok) => {
            this.retorno2 = JSON.stringify(ok);
            this.nativeURL = ok.nativeURL;
            let email = {
              to: 'paulohncaixeta@unipam.edu.br',
              attachments: [
                this.nativeURL
              ],       
              subject: 'Assunto',
              body: 'O conteúdo do arquivo é:' + texto,
              isHtml: true
            };
            this.emailComposer.open(email);

           },
    (err)=> {
            this.alerta(err.code.toString() + " " + 
                        err.message.toString(), "Atenção" );
            this.erroTela = JSON.stringify(err);
            })
    .catch((err) => {
      this.alerta("Erro Write" + err, "Atenção");
    });

     
    this.file.readAsText(path, arquivo)
   
    .then( (ok)=> {
         this.retorno3 = JSON.stringify(ok);
         this.conteudoArquivo = this.retorno3;           
     }
    ,
    (err)=> {
             this.alerta(err.code.toString() + " " + 
                         err.message.toString(), "Atenção" );
             this.erroTela = JSON.stringify(err);
            })
    .catch ((err) => this.alerta("erro leitura" + err, "Atenção"));
}


enviar2(){
  
   let path = this.file.dataDirectory;
   let arquivo = 'teste.txt';

   this.file.readAsText(path, arquivo)
    
     .then( (ok)=> {
          let conteudo = JSON.stringify(ok); 
          this.retorno4 = conteudo;     
          let email = {
            to: 'paulohncaixeta@unipam.edu.br',
            attachments: [
              path + arquivo
            ],      
            subject: 'subject',
            body: 'Conteudo do arquivo = ' + conteudo,
            isHtml: true
          };       
          this.emailComposer.open(email);             
      }
     ,
     (err)=> {
              this.alerta(err.code.toString() + " " + 
                          err.message.toString(), "Atenção" );
              this.erroTela = JSON.stringify(err);
             })
     .catch ((err) => this.alerta("erro leitura" + err, "Atenção"));
   
    
 }

alerta(mensagem : string, cabec : string)
{ 
 
  let alert = this.alertCtrl.create({
    title: cabec,
    subTitle: mensagem,
    buttons: ['OK']
  });
  alert.present();
}
}
