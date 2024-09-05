// site.js
const express = require('express');
const livrosRouter = require('./rotas/livros');

const app = express();
const port = 3000;

app.use(express.json());
app.use('/api', livrosRouter); // Base da URL para as rotas dos livros

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});