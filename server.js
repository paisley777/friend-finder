//Require NPM packages
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

//Create an express server and set the port to listen on
var app = express();
var PORT = process.env.PORT || 8080;

//Use bodyparser so the server can interpret data sent to it.
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

// Require the routing files
require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);

//Start the server
app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});
