"use strict";
const prices = [7, 1, 5, 3, 6, 4];
function maxProfit(prices) {
    let minPrice = prices[0];
    let maxPrice = 0;
    for (let i = 0; i < prices.length; i++) {
        minPrice = Math.min(minPrice, prices[i]);
        maxPrice = Math.max(maxPrice, prices[i] - minPrice);
    }
    return maxPrice;
}
;
console.log(maxProfit([7, 1, 5, 3, 6, 4]));
//# sourceMappingURL=MaxPrice.js.map