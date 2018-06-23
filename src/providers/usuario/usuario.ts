import { BancoDadosProvider } from './../banco-dados/banco-dados';
import { Injectable } from '@angular/core';
import { SQLiteObject } from '@ionic-native/sqlite';

@Injectable()
export class UsuarioProvider {


  Mensagem : String = "";
  
    constructor(private UsarioBancoDados: BancoDadosProvider) {
  
    }
    public criaUsuario(user) {
      return new Promise((resolve, reject) => {
        this.UsarioBancoDados.getBancoDados()
        .then((db: SQLiteObject) => {
          let sql = `insert into usuario (nomeUsuario,senhaUsuario) values ('${user.nomeUsuario}', '${user.senhaUsuario}')`;
          console.log('Query: ', sql)
          db.executeSql(sql, []).then((data: any) => {
            resolve(data)
          }).catch((err) => {
            reject(err)
          });
        }).catch((e) => { reject(e)});
      })
    }

    public getUserLogin (user) {
      return new Promise((resolve, reject) => {
        this.UsarioBancoDados.getBancoDados()
        .then((db: SQLiteObject) => {
          let sql = `select * from usuario where nomeUsuario = '${user.nomeUsuario}' and senhaUsuario = '${user.senhaUsuario}'`
          db.executeSql(sql, []).then((data: any) => {
            resolve(data)
          }).catch((err) => {
            reject(err)
          });
        }).catch((e) => {
          console.log(e)
          reject(e)
        });
      })  
    }
}
