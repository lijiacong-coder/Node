var Animal = require("./animal.js");
var Duck = require("./duck.js");
var Bird = require("./bird.js");

var animal = new Animal();
animal.say();
animal.eat();

Duck.say();
Duck.eat();

var Bird = new Bird();
Bird.say();
Bird.eat();