"use strict";
function canCompleteCircuit(gas, cost) {
    let gasSum = 0;
    for (let i = 0; i < gas.length; i++) {
        gasSum += gas[i];
    }
    let costSum = 0;
    for (let i = 0; i < cost.length; i++) {
        costSum += cost[i];
    }
    if (costSum > gasSum) {
        return -1;
    }
    let i = 0;
    let cur = 0;
    let x = 0;
    while (i < gas.length) {
        cur += gas[i] - cost[i];
        if (cur < 0) {
            x = i + 1;
            cur = 0;
        }
        i++;
    }
    return x;
}
;
console.log(canCompleteCircuit([1, 2, 3, 4, 5], [3, 4, 5, 1, 2]));
//# sourceMappingURL=GasStation.js.map