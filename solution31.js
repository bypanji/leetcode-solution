const s = "anagram"
const t = "nagaram"

var isAnagram = function(s, t) {
    if(s.length !== t.length) return false

    return s.split("").sort().join("") === t.split("").sort().join("")
};