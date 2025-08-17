const x = 123

var isPalindrome = function(x) {
    if(x < 0) return false
    if(String(x).length === 1) return true
    if(String(x).endsWith("0")) return false

    if(x.toString().split("").reverse().join("") === String(x)) {
        return true
    }

    return false
};

console.log(isPalindrome(x))