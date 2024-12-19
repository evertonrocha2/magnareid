import mysql from 'mysql2/promise';

export async function connectToDatabase() {
  const connection = await mysql.createConnection({
    host: 'localhost', // Endereço do seu banco de dados
    user: 'seu_usuario', // Seu usuário do MySQL
    password: 'sua_senha', // Sua senha do MySQL
    database: 'imcdata', // Nome do banco de dados
  });

  return connection;
}
