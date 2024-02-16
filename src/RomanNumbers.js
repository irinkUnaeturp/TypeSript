"use strict";
function romanToInt(s) {
    const obj = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000
    };
    let sum = 0;
    for (let i = 0; i < s.length; i++) {
        if (obj[s[i]] < obj[s[i + 1]]) {
            sum += obj[s[i + 1]] - obj[s[i]];
            i++;
        }
        else {
            sum += obj[s[i]];
        }
    }
    return sum;
}
;
console.log(romanToInt("III"));
//# sourceMappingURL=RomanNumbers.js.map