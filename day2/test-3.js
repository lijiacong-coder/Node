// exports 和 module.exports  解决了文件之间调用的封装性
// node的继承   (1)父类能被继承的方法全部拷贝给子类   (2)实现一种方法 让子类的构造函数能访问父类构造函数

// 类里面 有动态的成员方法 有静态的成员方法
//  访问动态new一个新对象 然后点访问函数   静态方法不需要new

function Cat(){

}

Cat.prototype={
    'name': 'fish',
    'eat' : function(){
        console.log("I love " + this.name);
    }
}

var blackcat = new Cat();
blackcat.eat();

var whiteDog={
    'name':'bone',
}

// 拷贝方式 call bind apply
blackcat.eat.call(whiteDog);   // 用call拷贝 调用eat不用加括号
whiteDog.eat;