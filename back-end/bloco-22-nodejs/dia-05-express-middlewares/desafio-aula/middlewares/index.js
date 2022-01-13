const express = require('express');
const app = express();
const hello = require('./hello.js');

app.use(express.json())

app.listen(3001, () => {
  console.log("escutando 3001...")
})
app.post('/ping', hello)
