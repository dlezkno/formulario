'use strinct'

var express = require('express');
var body = require('body-parser');
var app = express();

app.use(body.json());
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, contentType,Content-Type, Accept, Authorization");
    next();
});

const server = app.listen(process.env.PORT || 5000, function () {
    var port = server.address().port;
});

app.get("/li", function (req, res) {
    res.send([{id:"1",name:"Boeign"},{id:"2",name:"Airbus"}]);
});

app.post("/form", function (req, res) {
    res.send({
        name:req.body.name,
        email:req.body.email,
        cel:req.body.cel,
        age:req.body.age
    });
});
