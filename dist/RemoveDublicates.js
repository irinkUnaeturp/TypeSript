"use strict";
let nums5 = [1, 1, 1, 2, 2, 3];
function removeDuplicates(nums5) {
    let j = 2;
    for (let i = 2; i < nums5.length; i++) {
        if (nums5[i] !== nums5[j - 2]) {
            nums5[j++] = nums5[i];
        }
    }
    return j;
}
;
console.log(removeDuplicates([1, 1, 1, 2, 2, 3]));
//# sourceMappingURL=RemoveDublicates.js.map