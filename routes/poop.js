var express = require('express');
var route = express.Router();
var mysql = require('mysql');

var conn = mysql.createConnection({

            host: 'localhost',
            user: 'root',
            password : '',
            port : 3306, //port mysql
            database:'test',
            debug : true //set true if you wanna see debug logger

});


user = {
    name: 'ChaaRusk',
    email: 'umarpaul.360@gmail.com'
    };

route.get('/',function(req,res,next){
    conn.connect(function(err){
        if(err){
            console.log(err);
        }
        var query = conn.query('SELECT * FROM t_user',function(err,rows){

        if(err){
            console.log(err);
            return next("Mysql error, check your query");
        }


        //res.render('user',{title:"RESTful Crud Example",data:rows});
        res.json(rows);

        });        
    });
    


});

// route.post('/?',function(req,res,next){
//     user.name = 
// });

module.exports = route;