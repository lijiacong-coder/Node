// dns解析  把域名转换成ip地址  递归方式  和  迭代模式
/*var dns = require("dns");
var http = require('http');
url=['http://www.qq.com','http://www.baidu.com','http://www.sohu.com']

function fetchPage(url){
    var start = new Date();
    http.get(url,function(res){
        console.log("got respone from : " +url);
        console.log("Request took: ",new Date() - start , "ms");
    })
}

for(var i = 0; i < url.length; i ++){
    fetchPage(url[i]);
}*/


var dns = require("dns");

dns.resolve4("www.baidu.com",function(err,address){
    if(err){
        console.log(err);
    }else{
        console.log(address);
    }
})