"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cancellable = void 0;
function cancellable(fn, args, t) {
    const timer = setTimeout(() => {
        fn(args);
    }, t);
    return () => {
        clearTimeout(timer);
    };
}
exports.cancellable = cancellable;
;
//# sourceMappingURL=TimeoutCancellation.js.map