"use strict";
function longestCommonPrefix(strs) {
    let rez = '';
    if (strs[0]) {
        const str = strs[0].split('');
        for (let i = 0; i < str.length; i++) {
            const symb = str[i];
            let check = true;
            for (let j = 1; j < strs.length; j++) {
                if (symb !== strs[j][i]) {
                    check = false;
                }
            }
            if (check) {
                rez += symb;
            }
            if (!check) {
                return rez;
            }
        }
    }
    return rez;
}
;
console.log(longestCommonPrefix(["flower", "flow", "flight"]));
//# sourceMappingURL=LongestCommonPrefix.js.map