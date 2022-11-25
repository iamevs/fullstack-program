var express = require('express');
var router = express.Router();
var connection = require('../database');


function details(id,name, roll, m1, m2, m3, m4, m5) {
    console.log(id,name, roll, m1, m2, m3, m4, m5);
    var sql = "SELECT * FROM student_marks.student_details;";
    connection.query(`INSERT INTO student_marks.student_details(id,name,roll,m1,m2,m3,m4,m5) VALUES (${id},'${name}',${roll},${m1},${m2},${m3},${m4},${m5});`);
    console.log("Data Inserted");
}

// details( 4,'Sabari',40,99,99,99,99,99);

router.get('/', function (req, res, next) {
    res.send("Hello World");
});

router.get('/add', function(req,res,next) {
    // res.send("Data added");
    res.render('mark', { title: 'Student', action: '/mark/add' });
});

module.exports = router;