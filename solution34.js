const s = "MCMXCIV"
var romanToInt = function(s) {
    let result = 0
    const romanObj = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000,
    };

    for(let i = 0; i < s.length; i++) {
        if(romanObj[s[i]] < romanObj[s[i+1]]) {
            result += romanObj[s[i+1]] - romanObj[s[i]]
            i += 1
        } else {
            result += romanObj[s[i]]
        }
    }

    return result
}