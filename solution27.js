const x = 2, y = 7, z = 4

var findClosest = function(x, y, z) {
    let a = Math.abs(z - y);
    let b = Math.abs(z - x);
    if(a === b) return 0

    return a <= b ? 2 : 1;
};