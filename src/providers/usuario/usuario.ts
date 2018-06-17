import { UsuarioDto } from '../../pages/model/usuarioDTO';
import { BancoDadosProvider } from './../banco-dados/banco-dados';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SQLiteObject } from '@ionic-native/sqlite';

@Injectable()
export class UsuarioProvider {


  Mensagem : String = "";
  
    constructor(private UsarioBancoDados: BancoDadosProvider) {
  
    }

  // public update(usuarioDTO) {

  
  //     return this.UsarioBancoDados.getBancoDados()
  //     .then((db: SQLiteObject) => {
  
  //       let ativo = 0;
  //       if (UsuarioDto.ativo == true)
  //          ativo = 1;
  //       let sql = 'update produto set nomeProduto = "' + UsuarioDto.nomeProduto + '",' +
  //                 ' valorProduto = ' + UsuarioDto.valorProduto + ' , ' +
  //                 ;
  //       this.Mensagem = sql;
  
  //       return db.executeSql(sql, [])
  //         .then((data: any) => {
  //         }).catch((e) => {return("Erro (1) " + e)});
  //       })
  //       .catch((e) => {return("Erro (2) " + e)});
  
  // }
  
    public criaUsuario(UsuarioDto) {
  
      console.log(UsuarioDto)
        //let dataValidade = new Date(UsuarioDto.dataValidadeProduto);
              console.log('Inseriu', UsuarioDto)
        return this.UsarioBancoDados.getBancoDados()
        .then((db: SQLiteObject) => {
          let sql = 'insert into usuario (nomeUsuario,senhaUsuario)'  +
             ' values (?, ?)';
          return db.executeSql(sql,
            [UsuarioDto.nomeUsuario,
            UsuarioDto.senhaUsuario,
            ])
            .then((data: any) => {
              console.log('Inseriu', data)
            }).catch((err) => {
              console.log('Inseriu', err)
              });
          })
          .catch((e) => {return("Erro (2) " + e)});
    }
  
    // public deletaUsuario(id) {
  
    //   return this.UsarioBancoDados.getBancoDados()
    //   .then((db: SQLiteObject) => {
  
    //     return db.executeSql('delete from usuario where idUsuario = ?', [id])
    //       .then( )
    //       .catch((e) => {return("Erro (1) " + e)});
    //   })
    //   .catch((e) => {return("Erro (2) " + e)});
    // }
  
    // public get(id) {
  
    //   return this.UsarioBancoDados.getBancoDados()
    //   .then((db: SQLiteObject) => {
  
    //     let usuarioDto: UsuarioDto;
    //     usuarioDto = new UsuarioDto();
  
    //     return db.executeSql('select * from usuario where idUsuario = ?', [id])
    //       .then((data: any) => {
    //         if (data.rows.length > 0) {
    //            usuarioDto = this.montarProduto(data.rows.item(0));
    //            return UsuarioDto;
    //         } else {
    //             return UsuarioDto;
    //         }
    //       })
    //       .catch((e) => {return("Erro (1) " + e)});
    //   })
    //   .catch((e) => {return("Erro (2) " + e)});
    // }
  
    public getAll(codBarra : String) {
      let produtos: Array<UsuarioDto>;
      produtos = new Array<UsuarioDto>();
  
      let sql = "select * from usuario order by nomeUsuario";
            return this.UsarioBancoDados.getBancoDados()
          .then((db: SQLiteObject) => {
  
            return db.executeSql(sql,[]).then((data: any) => {
               if (data.rows.length > 0) {
                for (var i = 0; i < data.rows.length; i++) {
  
                  let usuarioDto: UsuarioDto;
                  usuarioDto = new UsuarioDto();
                  usuarioDto = this.montarUsuarios(data.rows.item(i));
                  produtos.push(usuarioDto);
                }
                return produtos;
              } else {
                return produtos;
              }
          })
          .catch((e) => {return("Erro (1) " + e)});
      })
      .catch((e) => {return("Erro (2) " + e)});
    }
  
    montarUsuarios (item : any)
    {
        let usuarioDto: UsuarioDto;
        usuarioDto = new UsuarioDto();
        usuarioDto.IdUsuario    = item.IdUsuario;
        usuarioDto.nomeUsuario  = item.nomeUsuario;
        usuarioDto.senhaUsuario = item.senhaUsuario;
  
        return usuarioDto;
    }
}
