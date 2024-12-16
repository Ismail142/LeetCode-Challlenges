/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let prices =  [7,1,5,3,6,4];
let profit = 0;
let start = prices[0];
for (let i=1; i<prices.length; i++){
  if (start < prices[i]){
    profit += prices[i]-start;
  }
  start = prices[i];
}
return profit;
};