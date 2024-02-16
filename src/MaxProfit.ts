const prices1 = [7,1,5,3,6,4]
function maxProfit(prices1: number[]): number {
    let total = 0
    for (let i = 1; i < prices1.length; i++) {
        if(prices1[i] > prices1[i - 1]) {
         total += prices1[i] - prices1[i - 1]
        }
    }

    return total

};

console.log(maxProfit([7,1,5,3,6,4]))
