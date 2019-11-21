import { exec } from "child_process";

for(var i =0;i<10;i++){
    var m =i;
    exec(m,function(m){
        console.log(m);
    })
}

function exec(param,callback){
    setTimeout(function(){
        callback(param);
    }, 200);
}

// 异步转同步   array
var A = new Array();
for(var i = 0; i < A.length; i ++){
    a=A[i];
    B(a,function(a){
        console.log(a);
    })
}