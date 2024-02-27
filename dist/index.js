"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const TimeoutCancellation_1 = require("./TimeoutCancellation");
const result = [];
const fn = (x) => x * 5;
const args = [2], t = 20, cancelTimeMs = 50;
const start = performance.now();
const log = (...argsArr) => {
    const diff = Math.floor(performance.now() - start);
    result.push({ "time": diff, "returned": fn(argsArr) });
};
const cancel = (0, TimeoutCancellation_1.cancellable)(log, args, t);
const maxT = Math.max(t, cancelTimeMs);
setTimeout(cancel, cancelTimeMs);
setTimeout(() => {
    console.log(result);
}, maxT + 15);
//# sourceMappingURL=index.js.map