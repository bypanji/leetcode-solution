const s = "a good   example"

var reverseWords = function(s) {
    return s.trim().split(" ").filter(n => n).reverse().join(" ")
};