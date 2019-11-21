// 对象与对象之间的关系  类与类之间的关系 函数与函数之间的关系

function parent(param1,param2){
    child(param1,param2);
}

function child(){
    console.log(arguments);   // 取到形参;
    console.log(arguments.callee) // callee返回的是归属于arguments的函数
    console.log(child.caller);  // caller 表示自身被那一个函数调用过输出parent
    console.log(child.caller.arguments.callee);  //输出的是child 相当于调用过parent的函数
}
parent("guhong","fage");
