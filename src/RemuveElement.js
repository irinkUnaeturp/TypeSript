"use strict";
let nums = [3, 2, 2, 3];
const value = 3;
function removeElement(nums, val) {
    let k = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] == val) {
            nums.splice(i, 1);
            i--;
        }
        k++;
    }
    return k;
}
;
console.log(removeElement([3, 2, 2, 3], 3));
console.log(nums);
//# sourceMappingURL=RemuveElement.js.map