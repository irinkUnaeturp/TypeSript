"use strict";
function reverseWords(s) {
    let arr = s.split(" ").filter(word => word.length != 0);
    return arr.reverse().join(" ");
}
;
console.log(reverseWords("the sky is blue"));
//# sourceMappingURL=ReverseWords.js.map