"use strict";
let nums1 = [1, 2, 3, 0, 0, 0];
let m = 3;
let nums2 = [2, 5, 6];
let n = 3;
function merge(nums1, m, nums2, n) {
    for (let i = m; i < nums1.length; i++) {
        nums1[i] = nums2[n - 1];
        n--;
    }
    nums1.sort((num1, num2) => num1 - num2);
}
;
merge(nums1, m, nums2, n);
console.log(nums1);
//# sourceMappingURL=MergeSortedArray.js.map