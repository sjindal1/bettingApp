var express = require("express");
var bodyParser = require("body-parser");
var mongoose = require("mongoose");

var app = express();
var userController = require('./server/controller/userController');

app.use("/static", express.static(__dirname +"/public"));
app.use(bodyParser.json());
app.use('/api',userController);
app.use("/views", express.static(__dirname +"/views"));

app.set("views", __dirname + "/views");
app.set("view engine", "pug")

app.get('/*', function(req,res){
      res.render('index');
});

mongoose.connect("mongodb://localhost/bettingApp");

app.listen(3000,function(){
    console.log("Application is now running on port 3000")
});

