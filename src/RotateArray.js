"use strict";
let nums6 = [1, 2, 3, 4, 5, 6, 7];
let k = 3;
function rotate(nums6, k) {
    const n = nums6.length;
    k %= n;
    const rotated = nums6.slice(n - k).concat(nums6.slice(0, n - k));
    for (let i = 0; i < n; i++) {
        nums6[i] = rotated[i];
    }
}
rotate(nums6, k);
console.log(nums6);
//# sourceMappingURL=RotateArray.js.map