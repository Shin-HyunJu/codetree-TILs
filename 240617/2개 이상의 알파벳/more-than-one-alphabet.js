const fs = require('fs');
let a = fs.readFileSync(0).toString().trim();

function differentAlphabet(a) {
    for (let i = 0; i < a.length; i++) {
        for (let j = i+1; j < a.length; j++) {
            if (a[i] !== a[j]) {
                return true;
            }
        }        
    }
    return false;
}

console.log(differentAlphabet(a) ? 'Yes': 'No')