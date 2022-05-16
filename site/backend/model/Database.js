const mysql = require('mysql2/promise');

module.exports = new 
    class Database {
        constructor() {
            this.err = "";
            // Quando crio a classe eu crio como vazio o casso de erro
        };
        // Abaixo cria o método conecta
        async conecta() {
            const config = {
                host: "projetolp.mysql.database.azure.com",
                user: "irineujunior@projetolp", 
                password: "oqa4.zJsb9",
                database: "sistemadoacao",
                port: 3306
            }
            try {
                this.connection = await new mysql.createConnection(config);
                return true;
            } catch(ex) {
                return false;
            }
        }

        // Aqui colocamos a consulta
        async consulta(sql, values) {
            try {
                // Esse fileds pode tira é apenas para lembra que temos um campo na posiçao 
                // 1 do array que retorna da consulta com os campos, por isso, colocamos apenas
                // para pegar as linhas de retorno.
                const [rows, fields] = await this.connection.execute(sql, values);
                return {
                    status: true,
                    data: rows
                } // Poderia só retornas a linha da consulta que no caso é o row
            } catch(ex) {
                return {
                    status: false,
                    err: ex.code,
                    message: ex.message,
                    data: []
                }
            }
        } // fim do método de consulta

        async manipula(sql, values) {
            try{
              const [rows, fields] = await this.connection.execute(sql, values);
              if (rows.affectedRows > 0 ) 
              return {
                  status: true,
                  lastId: rows.insertId
              }
              return {
                  status: false,
                  err: "NOT_ROWS"
              };
            }
            catch(ex){
                return {
                    status: false,
                    err: ex.code,
                    message: ex.message
                }
            }
        }
    }