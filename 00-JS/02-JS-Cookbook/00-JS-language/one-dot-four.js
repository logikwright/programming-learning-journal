'use strict';

function addRange(start, end) {
    let sum = 0;
    for(let i = start; i < end+1; i++) {
        sum += 1;
    }

    return sum;
}

console.log(addRange(10, 15));
console.log(addRange(1, 5));

let startNumber = 10;
let endNumber = 15;

console.log(addRange(startNumber, endNumber));

startnumber = 1;
endNumber = 5;
console.log(addRange(startNumber, endNumber));
