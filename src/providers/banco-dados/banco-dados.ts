import { Injectable } from '@angular/core';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite';

@Injectable()
export class BancoDadosProvider {
  
   constructor(private sqlite: SQLite) { 
 
   }  
   
   public getBancoDados() {
     let db = this.sqlite.create({
       name: 'trabalhoFinal.db',
       location: 'default'
     });
     return db;
   }
   
   public createDatabase() {
    console.log('Esta cheagando aki')
     return this.getBancoDados()
       .then((db: SQLiteObject) => {
         // Criando as tabelas
         this.createTables(db);
   
       })
       .catch(e => console.log(e));
   }
   
   private createTables(db: SQLiteObject) {
     // Criando as tabelas
       db.sqlBatch([
       ['CREATE TABLE IF NOT EXISTS usuario' + 
        ' (idUsuario integer primary key AUTOINCREMENT NOT NULL, ' + 
        ' nomeUsuario VARCHAR (100),'+
        ' senhaUsuario VARCHAR(8) );'],
        ['CREATE TABLE IF NOT EXISTS tarefas' +
         ' (idTarefa integer primary key AUTOINCREMENT NOT NULL, ' +
         ' titulo VARCHAR(100), ' +
         ' item VARCHAR(100), ' +
         ' fotoItem VARCHAR(100) );' ]
      ])
       .then(() => console.log('Usuario criadas'))
       .catch(e => console.error('Erro ao criar as tabelas', e));
   } 
}
