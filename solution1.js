const nums = [2,4,1,1,6,5]

function countHillValley(nums) {
    let result = 0
    let temp = []

    if(nums.length < 3) return 0

    if (nums.length > 0) {
        temp.push(nums[0]);
    }

    for(let i = 1; i < nums.length; i++) {
        if(nums[i] !== nums[i-1]) {
            temp.push(nums[i])
        }
    }

    for(let i = 1; i < temp.length - 1; i++) {
        if((temp[i-1] > temp[i]) && (temp[i+1] > temp[i]) )
            result++
        if((temp[i - 1] < temp[i]) && (temp[i + 1] < temp[i]))
            result++
    }


    return result
};

console.log("hmmm", countHillValley(nums))