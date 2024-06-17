const fs = require('fs');
let [a, b] = fs.readFileSync(0).toString().trim().split(' ').map(Number);

function operationalVal(a, b) {
    
    if (a > b) {
        a *= 2;
        b += 10;
    } else {
        b *= 2;
        a += 10;        
    }

    return [a, b];
}

[a,b] = operationalVal(a, b);

console.log(a, b);