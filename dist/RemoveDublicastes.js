"use strict";
let nums3 = [1, 1, 2];
function removeDuplicat(nums3) {
    let i = 0;
    while (i < nums3.length) {
        if (nums3[i] === nums3[i + 1]) {
            nums3.splice(i, 1);
            i--;
        }
        i++;
    }
    return i;
}
;
console.log(removeDuplicat([1, 1, 2]));
//# sourceMappingURL=RemoveDublicastes.js.map