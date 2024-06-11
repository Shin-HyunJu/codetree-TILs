const fs = require("fs");
let [a, o ,c] = fs.readFileSync(0).toString().trim().split(' ');

function arithmetic(a, o, c) {
    a = Number(a);
    c = Number(c);

    switch(o) {
        case '+':
        console.log(a, o, c, '=', a + c);
        break;
        case '-':
        console.log(a, o, c, '=', a - c);
        break;
        case '/':
        console.log(a, o, c, '=', parseInt(a / c));
        break;
        case '*':
        console.log(a, o, c, '=', a * c);
        break;
        default:
        console.log('False');
        break;
    }
}

arithmetic(a, o, c);