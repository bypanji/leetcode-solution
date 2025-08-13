//Merge Strings Alternately
const word1 = "ab";
const word2 = "pqrs";

var mergeAlternately = function(word1, word2) {
    let result = []
 
    for(let i = 0; i < Math.max(word1.length, word2.length); i++) {
        if(word1[i]) {
            result.push(word1[i])
        }
 
        if(word2[i]) {
            result.push(word2[i])
        }
    }
 
    return result.join("")
};