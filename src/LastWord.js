"use strict";
function lengthOfLastWord(s) {
    const splitted = s.trim().split(' ');
    return splitted[splitted.length - 1].length;
}
;
console.log(lengthOfLastWord("Hello World"));
//# sourceMappingURL=LastWord.js.map