var db = require("./db.js");

exports.insert_name_by_pass = function(uname,pass,nickname,callback){
  //var sql = "select * from t_users where ACCOUNT=? and PASSWORD=?";
  var sql = "insert into t_users (ACCOUNT,PASSWORD,NAME) values(?,?,?)";
  db.query(sql,[uname,pass,nickname],callback);

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

exports.check_name = function(account,callback){
  var sql = "select * from t_users where ACCOUNT=?";
  db.query(sql,[account],callback);
}

exports.get_name_by_pass = function(account,pass,callback){
  var sql = "select * from t_users where ACCOUNT=? and PASSWORD=?";
  db.query(sql,[account,pass],callback);
}