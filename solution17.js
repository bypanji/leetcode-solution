const x = 123

var isPalindrome = function(x) {
    if(x.toString().split("").reverse().join("") == x) {
        return true
    }

    return false
};