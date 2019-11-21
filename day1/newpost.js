var http = require("http");
var url = require("url");
var fs = require("fs");
var querystring = require("querystring");

http.createServer(function(req,res){
    var newpath = url.parse(req.url).pathname;
    if(newpath == "/"){
        goindex(res);
    }else if(newpath == "/add"){
        gopost(req,res);
    }else{
        res.writeHead(404,{"Content-type":"text/plain"});
        res.end("no page found");
    }
}).listen(3000);

console.log("server start");

function goindex(res){
    var indexpath = __dirname+'/static/'+url.parse("post.html").pathname;
    var indexData = fs.readFileSync(indexpath,"utf-8");
    res.writeHead(200,{"Content-type":"text/html"});
    res.end(indexData);
}
function gopost(req,res){
    // 接收浏览器传的name password
    // 1.什么时候开始传  2.什么时候传递结束  3.拼接缓冲区
    var postData="";
    req.setEncoding('utf8');  // 将数据编码成utf-8字符串

    req.addListener('data',function(postChunkData){   // data 接受到此数据触发事件   postChunkData是缓冲区返回的值  
        postData+=postChunkData;                        //  最后postData的值就是所有的数据都被转换完成
    });

    req.addListener("end",function(){
        var Params = querystring.parse(postData);
        if(Params.uname == "laoshan" && Params.pass == "12345"){
            res.writeHead(200,{"Content-type":"text/plain"});
            res.end("login sucess");
        }else{
            res.writeHead(404,{"Content-type":"text/plain"});
            res.end("login error");
        }
    })
}