const num = "6777133339"

var largestGoodInteger = function(num) {
    let result = []

    for(let i = 1; i < num.length; i++) {
        if(num[i-1] === num[i] && num[i+1] === num[i]) {
            result.push(`${num[i]}${num[i]}${num[i]}`)
        }
    }
    result = Math.max(...result.map(Number))

    return String(result)
};
