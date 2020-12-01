// make directory ==> cd into that directory ==> touch server.js ==> npm init ==> THEN you install the packages you want

// WE HAVE ACCESS TO THIS IN THIS FILE BECAUSE WE ALREADY INSTALLED EXPRESS INTO OUR DIRECTORY (locally)
// *** ALWAYS install express *locally*, NEVER globally.
// ==> npm i express | In the command line
const express = require("express");
const app = express(); // <== creates our Express HTTP server
const PORT = 3000;
const drinks = require("./models/drinks.js");

// Route Handler
app.get("/", (req, res) => {
  res.send("Welcome to the Gitpub App!");
});

// LISTEN
app.listen(PORT, () => {
  console.log(`Hey, I am up-and-running on Port:${PORT}`);
});
