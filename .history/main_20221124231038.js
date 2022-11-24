var express = require('express');
var mysql = require('mysql');
var app = express();

app.get('/', function (req, res) {
    res.send('Hello World');
});

app.listen(2000, function () {
    console.log('app is running on port 2000');
});