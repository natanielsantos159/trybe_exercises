const express = require('express');


const app = express();

app.listen(3000, () => {
  console.log('escutando...')
})

app.get('/', (req, res) => {
  res.send('Olá Mundo!')
})