"use strict";
async function addTwoPromises(promise1, promise2) {
    let result = 0;
    result += await promise1;
    result += await promise2;
    return result;
}
;
addTwoPromises(Promise.resolve(2), Promise.resolve(2))
    .then(console.log);
//# sourceMappingURL=addTwoPromises.js.map