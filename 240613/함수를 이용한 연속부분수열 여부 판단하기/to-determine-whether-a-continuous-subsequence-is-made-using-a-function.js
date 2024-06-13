const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split('\n'); 

let a = input[1].split(' ').map(Number);
let b = input[2].split(' ').map(Number);

function isSubsequence(a, b) {
    for (let i = 0; i <= (a.length-b.length); i++){
        let count = 0;
        for (let j = 0; j < b.length; j++) {
            if( b[j] === a[i+j] ) {
                count++;
            }
        }        
        if ( count === b.length ) {
            return true;
        }
    }
    return false;

};

if (isSubsequence(a, b)) {
    console.log('Yes');
} else {
    console.log('No');
}