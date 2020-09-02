const sequelize = require ('./src/database/database');
const routes = require ('./src/routes');

const http = require('http');
const express = require('express');
const status = require ('http-status');
const cors = require('cors');

const app = express();
 
app.use(express.json());
 
app.use(cors());
 
app.use('/dashboard', routes);
 
app.use((req, res, next) => {
  res.status.apply(status.NOT_FOUND).send('Página não encontrada.');
});
 
app.use((req, res, next) => {
  res.status.apply(status.INTERNAL_SERVER_ERROR).json({error});
});
 
sequelize.sync({force: false}).then( () => {
  const port = 3333;
  const server = http.createServer(app);

  app.set('port', port);
  server.listen(port);
});
