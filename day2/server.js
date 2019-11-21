var util = require("util");
var events = require("events");

function MyStream(){
    events.EventEmitter.call(this);
}

util.inherits(MyStream,events.EventEmitter); // inherits方法 用来继承形参是 子类 父类

MyStream.prototype.write=function(data){
    this.emit("laoshan",data);  // 发送数据
}

var mystream = new MyStream();
console.log(mystream instanceof events.EventEmitter); // instanceof 表示前者是后者的子集
console.log(MyStream.super_ === events.EventEmitter);

mystream.on("laoshan",function(data){
    console.log("Recrived" + data);
});
mystream.write(" It work!");
