
// exports 是  module.exports得引用  直接区别是  直接赋值和引用赋值.

exports.bb = function(){
    console.log("laoxie");
}


exports = {
    'bb': function(){
        console.log("laoxie");
    }
}