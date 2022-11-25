var express = require('express');
var router = express.Router();

router.get('/', function (req, res, next) {
    res.send("Hello World");
});

router.get('/add', function(req,res,next) {
    res.send("Data added");
});

module.exports = router;