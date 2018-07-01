import { BancoDadosProvider } from './../banco-dados/banco-dados';
import { Injectable } from '@angular/core';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite';
import { Item } from 'ionic-angular/components/item/item';

@Injectable()
export class TarefasProvider {

  constructor(private UsarioBancoDados: BancoDadosProvider) { }
  
  
  public criaTarefaTexto(tarefa) {
    return new Promise((resolve, reject) => {
      this.UsarioBancoDados.getBancoDados()
      .then((db: SQLiteObject) => {
        let sql = `insert into tarefas (titulo,Item) values ('${tarefa.tarefa}','${tarefa.item}')`;
        console.log('Query: ', sql)
        db.executeSql(sql, []).then((data: any) => {
          resolve(data)
        }).catch((err) => {
          reject(err)
        });
      }).catch((e) => { reject(e)});
    })
  }

  public criaTarefaFoto(tarefa) {
    return new Promise((resolve, reject) => {
      this.UsarioBancoDados.getBancoDados()
      .then((db: SQLiteObject) => {
        let sql = `insert into tarefas (titulo,fotoItem) values ('${tarefa.tarefa}','${tarefa.fotoItem}')`;
        console.log('Query: ', sql)
        db.executeSql(sql, []).then((data: any) => {
          resolve(data)
        }).catch((err) => {
          reject(err)
        });
      }).catch((e) => { reject(e)});
    })
  }
}
