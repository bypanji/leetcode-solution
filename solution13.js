n = 27

var isPowerOfThree = function(n) {
    if(n === 1) return true
    if(n < 1 || n % 3 !== 0) return false

    while(n > 1) {
        if(n % 3 !== 0) return false

        n/=3;
    }

    return true
};

console.log(isPowerOfThree(n))