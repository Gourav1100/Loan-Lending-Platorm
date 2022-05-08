var garbage = require("./garbageCollector");

var now = new Date();
var millisTill10 = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 0, 0, 0, 0) - now;
if (millisTill10 < 0) {
     millisTill10 += 86400000; 
}
setInterval(Beyond, millisTill10);