// define a string de conection com o banco de dados
module.exports = {
  development: {
    database: {
      host: 'localhost',
      port: 3306,
      name: 'DB_USER',
      dialect: 'mysql',
      user: 'root',
      password: '',
    },
  },
  production: {
    database: {
      host: process.env.DB_HOST,
      host: process.env.DB_PORT,
    },
  },
}
