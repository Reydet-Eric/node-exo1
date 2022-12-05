const userInfos =require('./information.js');
var cowsay = require("cowsay");
const { nameUser, campus } = require('./information.js');

console.log(cowsay.say({
    text: `Hello ${nameUser} from ${campus}`,
    e:"OO",
    T:"p"
}));