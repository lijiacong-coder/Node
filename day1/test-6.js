// nodejs模块  三种 原生模块 第三方模块 自定义模块 

// 是不是所有原生模块都需要require加载?  不是  

/*var fs = require("fs");
var data = fs.readFileSync("./1.txt","UTF-8");   // 同步函数
console.log(data);
console.log("end");*/

// 按照缓冲区的方式读
// 按照stream的pipe(管道)的方式读

/*var fs = require("fs");
fs.readFile("./1.txt","utf-8",function(err,data){  // 异步函数
    if(err){
        console.log(err);
    }else{
        console.log(data);
    }
})
console.log("end");*/

var fs = require("fs");
fs.readFile("./1.txt","utf-8",function(err,data){
    if(err){
        console.log(err);
    }else{
        getData(data);
    }
})

function getData(data){
    setTimeout(function(){
        console.log(data);
    },2000)
}