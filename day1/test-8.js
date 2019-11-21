function Person(){
    this.think = function(callback){
        console.log("thinking ``````");
        setTimeout(function(){
            callback();
        },5000);
    };
    this.answer = function(){
        console.log("I am answering other qusetion");
    }
}

var person = new Person();
person.think(function(){
    console.log("thinking 5 senconds get the right answer");
});
person.answer();