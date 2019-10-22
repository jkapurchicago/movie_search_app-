var express = require("express");
var app = express();
// var request = require("request");

var port = 8080;
var IP = "localhost";

app.listen(port, function() {
  console.log("Movie App has started!!!");
});

app.get("/", function(req, res) {
  res.send("YUP, WE ARE LIVE!!");
});

app.get("/results", function(req, res) {
  res.send("can you hear me");
});
