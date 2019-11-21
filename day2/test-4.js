// var name = "xiaojia" , age=17;

var obj={
    name:'xiaozhang',
    objAge:this.age,
    myfun:function(fm,t){
        console.log(this.name+ " 年龄: "+ this.age+" 来自: "+fm+" 去哪: "+t);
    }
}

var db={
    name:'laoshan',
    age:99,
}

// call(目标源,param1,param2)
obj.myfun.call(db,"哈尔滨","北京");     // call
obj.myfun.apply(db,["哈尔滨","北京"]);  // apply传参必须传的是一个数组
obj.myfun.bind(db,"哈尔滨","北京")();   // bing返回的是一个function 必须自执行所以要加括号

// 对象与对象之间的关系  类与类之间的关系 函数与函数之间的关系