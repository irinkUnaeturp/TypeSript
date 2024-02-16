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
let fn = (a, b, c) => (a + b + c);
let onceFn = once(fn);
console.log(onceFn(1, 2, 3));
console.log(onceFn(2, 3, 6));
//# sourceMappingURL=AllowOneFunctionCall.js.map