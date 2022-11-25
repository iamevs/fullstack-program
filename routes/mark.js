// var express = require('express');
// var router = express.Router();
// var connection = require('../database');


// function details(id, name, roll, m1, m2, m3, m4, m5) {
//     console.log(id, name, roll, m1, m2, m3, m4, m5);
//     var sql = "SELECT * FROM student_marks.student_details;";
//     connection.query(`INSERT INTO student_marks.student_details(id,name,roll,m1,m2,m3,m4,m5) VALUES (${id},'${name}',${roll},${m1},${m2},${m3},${m4},${m5});`);
//     console.log("Data Inserted");
// }

// // details( 4,'Sabari',40,99,99,99,99,99);

// router.get('/', function (req, res, next) {
//     res.send("Hello World");
// });

// router.get('/add', function (req, res, next) {
//     var id = 4;
//     var name = req.body.name;
//     var roll = req.body.roll;
//     var m1 = req.body.m1;
//     var m2 = req.body.m2;
//     var m3 = req.body.m3;
//     var m4 = req.body.m4;
//     var m5 = req.body.m5;
//     // id++;
//     // res.send("Data Inserted");
//     // res.send("Data added");
//     res.render('mark', { title: 'Student', action: '/mark/add' });
//     // details(id,name,roll,m1,m2,m3,m4,m5);
// });

// module.exports = router;


var express=require('express');
var database=require('../database');

var router=express.Router();

router.get('/',function(request,response,next) {
    response.send("Sample Node Page");
});

router.get('/add',function(request,response,next) {
    response.render('mark', { title:'Insert Data', action:'add' });
});

router.post('/add',function(request,response,next) {
    var reg_no=request.body.reg_no;
	var name = request.body.name;
	var python = request.body.python;
	var datastructure = request.body.datastructure;
	var computernetwork = request.body.computernetwork;
	var java = request.body.java;
	var systemsoftware = request.body.systemsoftware;
	var total = request.body.total;
	var average = request.body.average;

	var query = `INSERT INTO mark (reg_no, name, Python, javaprogramming, computernetwork, datastructure, systemsoftware, total, average) 
	VALUES ("${reg_no}", "${name}", "${python}", "${java}", "${computernetwork}", "${datastructure}", "${systemsoftware}", "${total}", "${average}")`;

	database.query(query, function(error, data){

		if(error)
		{
			throw error;
		}	
		else
		{
            //request.flash('success', 'Sample Data Inserted');
			response.redirect("/mark/");
		}

	});

});


module.exports=router;