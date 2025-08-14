const nums = [847,847,0,0,0,399,416,416,879,879,206,206,206,272]
const nums2 = [0,1]

function applyOperations(nums) {
    let result = []
    let zero = []

    for(let i = 0; i < nums.length; i++) {
        if(nums[i] !== 0) {
            if(nums[i] !== nums[i-1]) {
            if(nums[i] === nums[i+1]) {
                result.push(nums[i] + nums[i+1])
                nums[i+1] = 0
            }

            else if(nums[i] !== nums[i+1] && nums[i] !== nums[i-1])  result.push(nums[i])
            }
            
        }
    }

    for(let j = 0; j < nums.length - result.length; j++) {
        zero.push(0)
    }

    return result.concat(zero);
};