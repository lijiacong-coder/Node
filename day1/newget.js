var http = require("http");
var url = require("url");
var querystring = require("querystring");

http.createServer(function(req,res){
    // console.log(req.url);
    var str = url.parse(req.url).query;
    var obj = querystring.parse(str);
    console.log(obj);
}).listen(3000);

console.log("server start");