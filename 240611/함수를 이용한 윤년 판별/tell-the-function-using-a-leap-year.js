const fs = require('fs');
let year = Number(fs.readFileSync(0).toString().trim());

// 4로 나누어 떨어지는 해는 윤년
// 예외, 100으로 나누어 떨어지되, 400으로 나누어 떨어지지 않는 해는 평년,, 
function isLeapYear(y) {
    if (y % 4 !== 0 ) {
        return false;
    } else {
        if (y % 100 === 0 && y % 400 !== 0) {
            return false;
        }
        return true;
    }
}

function another(y) {
    if (y % 4 !== 0) {
        return false;
    }

    if (y % 100 !== 0) {
        return true;
    }

    if (y % 400 !== 0) {
        return false;
    }

    return true;
}


console.log(another(year));