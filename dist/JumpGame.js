"use strict";
const nums7 = [2, 3, 1, 1, 4];
function canJump(nums7) {
    let n = nums7.length;
    if (n <= 1) {
        return true;
    }
    let max = nums7[0];
    for (let i = 0; i < n; i++) {
        if (max <= i && nums7[i] === 0) {
            return false;
        }
        if (i + nums7[i] > max) {
            max = i + nums7[i];
        }
        if (max >= n - 1) {
            return true;
        }
    }
    return false;
}
;
console.log(canJump([2, 3, 1, 1, 4]));
//# sourceMappingURL=JumpGame.js.map