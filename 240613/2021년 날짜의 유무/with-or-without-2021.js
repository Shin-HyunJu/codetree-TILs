const fs = require("fs");
let [m, d] = fs.readFileSync(0).toString().trim().split(' ').map(Number);

let monthDayList = [{1:31}, {2:28}, {3:31}, {4:30}, {5:31}, {6:30}, {7:31}, {8:31}, {9:30}, {10:31}, {11:30}, {12:31}];


function isExistence() {
    for (let i=0; i < monthDayList.length; i++) {
        if (m === (i + 1) && d <= monthDayList[i][`${i+1}`] ) {
            return true;
        }
    }
}


if(isExistence()) {
    console.log('Yes')
} else {
    console.log('No');
}