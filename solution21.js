const nums = [1,3,0,0,2,0,0,4]

var zeroFilledSubarray = function(nums) {
    let result = 0
    let temp = 0
    
    for(let i = 0; i < nums.length; i++) {
        if(nums[i] === 0) {
            temp++
            result += temp
        } else temp = 0
    }

    return result
};