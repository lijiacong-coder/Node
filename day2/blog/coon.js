// 把一个文件读取到内存 fs buffer stream

exports.goIndex = function(){
    var indexPath = __dirname + '/static/' + URL.parse("index.html").path.name;
    var indexData = fs.readFileSync(indexPath,"utf-8");
    res.writeHead(200,{"Content-type":"text/html"});
    res.end(indexData);
}
exports.goPost = function(){

}
exports.goImg = function(){

}
exports.goDefault = function(){
    res.writeHead(200,{"Content-type":"text/plain"});
    res.end("no page founded");
}