// node 写webserve

// JS 如何完成继承 ES6 extends   ES5 原型链
// JS 如何完成封装 private public protected

function Demo(){
    this.a = 123;
    this.b = function(){
        console.log(123);
    }
    this.write = function(){
        console.log(789);
    }
}

Demo.prototype.write = function(){   // 通过原型链把方法给到子类
    console.log(789);
}

var demo = new Demo();
demo.write();
console.log(demo);
console.log(Demo.prototype == demo.__proto__);