var mysql = require('mysql');
var pool  = mysql.createPool({
  connectionLimit : 10,
  host            : 'localhost',
  user            : 'root',
  password        : '',
  database        : 'blog'
});

exports.insert_name_by_pass = function(uname,pass,callback){

    pool.getConnection(function(err, connection) {
        if (err) throw err; 

        var sql = "select * from t_users where ACCOUNT='"+uname+"' and "+"PASSWORD='"+pass+"'";
        connection.query(sql, function (error, results, fields) {
        connection.release();
        if (error) throw error;
        callback(err,results);

        });
      });

    /*
    connection.connect();
 
    connection.query('SELECT * from t_users', function (error, results, fields) {
    if (error) throw error;
    console.log('The solution is: ', results[0].solution);
    // console.log(results);
    callback(error,results);
    connection.end();
    });*/
}