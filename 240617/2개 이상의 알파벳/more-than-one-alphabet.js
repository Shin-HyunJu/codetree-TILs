const fs = require('fs');
let a = fs.readFileSync(0).toString().trim();

function differentAlphabet(a) {
    for (let i = 1; i < a.length; i++) {
        if (a[0] !== a[i]) {
            return true;
        }
    }
    return false;
}

console.log(differentAlphabet(a) ? 'Yes': 'No')