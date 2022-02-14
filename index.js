const express = require('express');
const novelas = require('./src/database/novelas.json');

const app = express();

const PORT = 3000;

app.get('/novelas', (req, res) => {
  return res.json(novelas)
});

app.listen(PORT, () => console.log(`Online na porta ${PORT}`));