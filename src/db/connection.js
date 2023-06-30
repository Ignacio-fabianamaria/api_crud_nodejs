const mysql = require('mysql2/promise')

const connection = mysql.createPool({
    host: 'localhost',
    port: 33060,
    user: 'root',
    password: 'root',
    database: 'customerManagement',
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0,
})

module.exports = connection

/*
Um pool de conexões é um repositório que contém um conjunto de conexões estabelecidas
previamente com o banco de dados. Essas conexões serão reutilizadas durante a execução
da aplicação conforme a necessidade. Em outras palavras, quando uma operação no
banco de dados for necessária nossa aplicação irá:

Requisitar uma conexão no pool de conexões;
-Utilizar essa conexão para enviar uma operação SQL ao servidor MySQL;
-Devolver a conexão para o pool de conexões ao final da operação com o MySQL;
-Tornar a conexão disponível para ser utilizada em requisições futuras.

O uso do pool de conexões é encorajado, pois sem ele, para cada operação com o MySQL
uma conexão seria aberta e, após seu uso, seria fechada. Assim, seria necessário abrir
novamente uma nova conexão com o MySQL para executar uma nova operação. E abrir uma nova
conexão com o MySQL demanda tempo, adicionando um atraso para cada requisição da API
como consequência.
*/