var crypto = require("crypto");

/*var hash = crypto.createHash('md5');

hash.update("12345");
console.log(hash.digest('hex'));*/
// 827ccb0eea8a706c4c34a16891f84e7b

var hamc = crypto.createHmac('md5','');
hamc.update('12345');
console.log(hamc.digest('hex'));
// f6a0e1616c0e3df78b9ae7aec463cb0a