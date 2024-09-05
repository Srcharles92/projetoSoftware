// esse é o arquivo que faz a conexão com o Banco de Dados (MySQL)
const mysql = require('mysql2'); //biblioteca que interagem com o banco de dados

const pool = mysql.createPool ({
    host:'root',
    user: 'user',
    passoword: '65590997',
    database: 'Livraria'
})
//Faltando criar u usuário no banco de dados

module.exports = pool;