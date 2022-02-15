const express = require('express');
const novelas = require('./src/database/novelas.json');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

const PORT = 3000;

app.get('/novelas', (req, res) => {
  return res.json(novelas)
});

app.post('/addNovelas', (req, res) => {
 // para adicionar novela
});

app.listen(PORT, () => console.log(`Online na porta ${PORT}`));