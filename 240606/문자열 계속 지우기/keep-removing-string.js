const fs = require("fs");
let [str, elem] = fs.readFileSync(0).toString().trim().split('\n');

while(str.indexOf(elem) !== -1) {
    let index = str.indexOf(elem);
    let length = elem.length;

    str = str.slice(0,index) + str.slice(index+length);
}

console.log(str);