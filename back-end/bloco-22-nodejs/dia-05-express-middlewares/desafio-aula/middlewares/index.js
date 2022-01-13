const express = require("express");

const app = express();
const hello = require("./hello.js");
const ping = require("./ping.js");
const greeting = require("./greeting.js");

app.use(express.json());

app.listen(3001, () => {
  console.log("escutando 3001...");
});

app.post("/hello", hello);

app.get("/ping", ping);

app.post('/greeting', greeting)