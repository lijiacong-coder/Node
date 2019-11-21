// 写后端 webServer   node 是单进程 异步回调事件循环
// 同步会产生阻塞 异步不会 

var http = require("http");

http.createServer(function(req,res){
    res.writeHead(200,{"Content-type":"text/plain"});  // plain解析的是字符串
    res.end("hello word ");

}).listen(3000);

console.log("server start port 3000");


//数据包分为(请求行  包头  空格  包体)  status code 大致四种数字开头
// 200 301 302 304 307 404 500 501 502 503   5开头的是服务器问题

//cnpm install -g supervisor  
//开发环境下  supervisor  nodemon 不能放在生产环境下 pm2

//三码一致  文件编码(ANSI Unicode UTF-8)  浏览器解码(GBK/GB18030/GB2312)  数据库编码 UTF-8