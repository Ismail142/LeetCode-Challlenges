/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    

let minPrice = prices[0];
let profit = 0;
for (let i=1; i<prices.length; i++){
  minPrice = Math.min(minPrice,prices[i]);
  profit = Math.max(profit,prices[i]-minPrice);
}

    return profit;

};alues(uniqueElement));

for (key in uniqueElement){
  if (uniqueElement[key] === max)
  return key
}

};