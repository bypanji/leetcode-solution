const prices = [7,6,4,3,1]

var maxProfit = function(prices) {
    let result = 0
    let temp = prices[0]

    for(let i = 0; i < prices.length; i++) {
        if(prices[i] < temp) temp = prices[i]
        if(prices[i] - temp > result) result = prices[i] - temp
    }

    return result
};