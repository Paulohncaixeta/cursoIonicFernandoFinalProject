import { BancoDadosProvider } from './../banco-dados/banco-dados';
import { Injectable } from '@angular/core';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite';

@Injectable()
export class TarefasProvider {

  constructor(private UsarioBancoDados: BancoDadosProvider) { }
  
  
  public criaTarefa(tarefa) {
    return new Promise((resolve, reject) => {
      this.UsarioBancoDados.getBancoDados()
      .then((db: SQLiteObject) => {
        let sql = `insert into tarefas (titulo) values ('${tarefa}')`;
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
