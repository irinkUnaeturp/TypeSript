"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sleep = void 0;
async function sleep(mills) {
    return new Promise((resolve) => setTimeout(resolve, mills));
}
exports.sleep = sleep;
//# sourceMappingURL=sleep.js.map