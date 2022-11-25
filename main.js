var express = require('express');
// var mysql = require('mysql2');
var connection = require('./database');
var app = express();

app.get('/', function (req, res) {
    function details(name, roll, m1, m2, m3, m4, m5) {
        // let id = 4;
        console.log(name, roll, m1, m2, m3, m4, m5);
        var sql = "SELECT * FROM student_marks.student_details;";
        connection.query(`INSERT INTO student_marks.student_details(name,roll,m1,m2,m3,m4,m5) VALUES ('${name}',${roll},${m1},${m2},${m3},${m4},${m5});`);
        // connection.query(sql, function (err, result) {
        //     if (err) throw err;
        //     // res.send(result);
        // });
        alert("Data Inserted");
    }
    res.send(` 
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
    <div class="container">
            <h1 class="text-center text-success mt-3 mb-3 ">Student's Mark Register</h1>
            <div class="card">
                <div class="card-header text-success fs-3">
                    Student Details
                </div>               
                <div class="card-body">
                    <form method="post" action="/">
                        <div class="row">
                        <div class="col-sm-6">
                            <div class="mb-3">
                                <label>Name</label>
                                <input type="text" name="name" id="name" class="form-control"/>
                            </div>
                        </div>
                            <div class="col-sm-6">
                                <div class="mb-3">
                                    <label>Reg.No</label>
                                    <input type="text" name="regno" id="regno" class="form-control" />
                                </div>
                            </div>
                        </div>
                        <div class="card-header text-Success fs-3">Subject</div>
                        <div class="row" style="margin-top:10px">
                            <div class="col-sm-6">
                                <div class="mb-3">
                                    <label>Python</label> 
                                    <input type="number" name="python" id="mark1" class="form-control" onchange="calc()" />              
                                </div>
                            </div>
                            <div class="col-sm-6">
                                <div class="mb-3">
                                    <label>Java Programming</label> 
                                    <input type="number" name="java" id="mark2" class="form-control" onchange="calc()"/>           
                                </div>
                            </div>
                            <div class="col-sm-6">
                                <div class="mb-3">
                                    <label>Computer Network</label> 
                                    <input type="number" name="computernetwork" id="mark3" class="form-control" onchange="calc()"/>              
                                </div>
                            </div>
                            <div class="col-sm-6">
                                <div class="mb-3">
                                    <label>Data Structure</label> 
                                    <input type="number" name="datastructure" id="mark4" class="form-control" onchange="calc()"/>              
                                </div>
                            </div>
                            <div class="col-sm-6">
                                <div class="mb-3">
                                    <label>System Software</label> 
                                    <input type="number" name="systemsoftware" id="mark5" class="form-control" onchange="calc()" />
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-sm-6">
                                <div class="mb-3">
                                    <label>Total</label> 
                                    <input type="number" name="total" id="total" class="form-control" />
                                </div>
                            </div>
                            <div class="col-sm-6">
                                <div class="mb-3">
                                    <label>Average</label> 
                                    <input type="number" name="average" id="avg" class="form-control" />
                                </div>
                            </div>
                        </div>              
                        <div class="row">
                            <div class="col-sm-6">
                                <button type="submit" id="btnsubmit" class="btn btn-success btn-sm">Submit</button>                                
                            </div>
                        </div>
                    </form>
                </div>
            </div> 
            <script>
            function calc()
            {
                let m1=Number(document.getElementById("mark1").value);
                let m2=Number(document.getElementById("mark2").value);
                let m3=Number(document.getElementById("mark3").value);
                let m4=Number(document.getElementById("mark4").value);
                let m5=Number(document.getElementById("mark5").value);
                let total=m1+m2+m3+m4+m5;
                let avg=Math.round(total/5);
                document.getElementById("total").value=total;
                document.getElementById("avg").value=avg;
            }
            </script>
    `);
});

app.listen(2000, function () {
    console.log('app is running on port 2000');
    connection.connect(function (err) {
        if (err) throw err;
        console.log('Connected!');
    });
});