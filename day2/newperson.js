function Person(){
    this.eat = function(){
        console.log("I am eating");
    }
    this.sleep = function(){
        console.log("I am sleeping");
    }
}
module.exports = Person;