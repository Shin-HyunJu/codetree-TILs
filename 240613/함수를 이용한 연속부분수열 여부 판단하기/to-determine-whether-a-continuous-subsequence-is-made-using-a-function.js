const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split('\n'); 

let [al, bl] = input[0].split(' ').map(Number);
let a = input[1].split(' ').map(Number);
let b = input[2].split(' ').map(Number);

function isSame(i) {
    for (let j = 0; j < bl; j++) {
        if (b[j] !== a[i+j]) {
            return false;
        }
    }
    return true;
}

function isSubsequence() {
    for (let i = 0; i <= (al-bl); i++){
        if (isSame(i)) {
            return true;
        }
    }
    return false;
};

if (isSubsequence()) {
    console.log('Yes');
} else {
    console.log('No');
}