const fs = require("fs");
let input = fs.readFileSync(0).toString().trim();
let str = '';

//for문 뒤에 한칸 띄웠나..?
for (let elem of input) {
    if (elem >= 'a' && elem <= 'z') {
        str += elem.toUpperCase();
    } else if (elem >= 'A' && elem <= 'Z') {
        str += elem.toLowerCase();
    }
}

console.log(str);