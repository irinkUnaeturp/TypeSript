"use strict";
function once(fn) {
    let i = 1;
    return function (...args) {
        if (i) {
            i = 0;
            return (fn(...args));
        }
    };
}
let onceFn = once(fn);
console.log(onceFn(1, 2, 3));
console.log(onceFn(2, 3, 6));
//# sourceMappingURL=AllowOneFunctionCall.js.map