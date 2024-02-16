"use strict";
function convert(s, numRows) {
    let r = numRows;
    let n = s.length;
    if (n <= 1 || numRows === 1)
        return s;
    let ci = 0;
    let si = -1;
    let rows = Array(numRows).fill('');
    for (let i = 0; i < n; i++) {
        rows[ci] += s[i];
        if (ci == r - 1 || ci == 0) {
            si *= -1;
        }
        ci += si;
    }
    return rows.join('');
}
;
console.log(convert("PAYPALISHIRING", 3));
//# sourceMappingURL=Zigzag.js.map