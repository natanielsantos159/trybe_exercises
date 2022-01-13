const express = require("express");

const app = express();
const ping = require("./ping.js");
const hello = require("./hello.js");
const greeting = require("./greeting.js");
const getSimpsons = require("./getSimpsons.js");
const getSimpsonById = require("./getSimpsonById.js");
const createSimpson = require("./createSimpson.js");
const validateIdSimpson = require("./validateIdSimpson.js");
const validateNameSimpson = require("./validateNameSimpson.js");

app.use(express.json());

app.listen(3001, () => {
  console.log("escutando 3001...");
});

app.post("/hello", hello);

app.get("/ping", ping);

app.post('/greeting', greeting)

app.get('/simpsons', getSimpsons)

app.get('/simpsons/:id', getSimpsonById)

app.post('/simpsons',validateIdSimpson, validateNameSimpson, createSimpson)
