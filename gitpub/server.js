// make directory ==> cd into that directory ==> touch server.js ==> npm init ==> THEN you install the packages you want

// WE HAVE ACCESS TO THIS IN THIS FILE BECAUSE WE ALREADY INSTALLED EXPRESS INTO OUR DIRECTORY (locally)
// *** ALWAYS install express *locally*, NEVER globally.
// ==> npm i express | In the command line
const express = require("express");
const app = express(); // <== creates our Express HTTP server
const PORT = 3000;
const drinks = require("./models/drinks.js");

/*
 **************
 * middleware *
 **************
 */
app.set("view engine", "jsx"); // use set method to create a key/value pair...  our Key = "View Engine" and our Value = "JSX"
app.engine("jsx", require("express-react-views").createEngine()); // use engine method (in conjunction with .createEngine) to create our engine...
// END middleware???

// Route Handler | Root
app.get("/", (req, res) => {
  res.send("Welcome to the Gitpub App!");
});

// Route Handler | Drinks
app.get("/drinks", (req, res) => {
  res.render("Index", {
    drinks: drinks, // in this instance, we are passing our drinks OBJECT as our props
  });
});

// Route Handler | ID
app.get("/drinks/:id", (req, res) => {
  res.send(req.params.id);
});

// LISTEN
app.listen(PORT, () => {
  console.log(`Hey, I am up-and-running on Port:${PORT}`);
});
