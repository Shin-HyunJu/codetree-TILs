const fs = require("fs");
let [y, m, d] = fs.readFileSync(0).toString().trim().split(' ');

function leapYear() {
    if(y % 4 !== 0) return false; 
    if(y % 100 === 0 && y % 400 !== 0) return false; 
    return true;
}

function printSeason() {
    if([3, 4, 5].includes(m)) {
        console.log('Spring');
    } else if ([6, 7, 8].includes(m)) {
        console.log('Summer');
    } else if ([9, 10, 11].includes(m)) {
        console.log('Fall');
    } else {
        console.log('Winter');
    }
}

if ([1,3,5,7,8,10,12].includes(m)) {
    printSeason();
} else if (m === 2) {
    if (leapYear()) {
        if (d <= 29) printSeason();
        else console.log(-1);
    } else {
        if (d <= 28) printSeason();
        else console.log(-1);
    }
} else {
    if (d <= 30) printSeason();
    else console.log(-1);
}