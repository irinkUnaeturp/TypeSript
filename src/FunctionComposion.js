"use strict";
function compose(functions) {
    return function (x) {
        for (let i = functions.length - 1; i >= 0; i--) {
            x = functions[i](x);
        }
        return x;
    };
}
console.log(compose([x => x + 1, x => x * x, x => 2 * x])(4));
//# sourceMappingURL=FunctionComposion.js.map