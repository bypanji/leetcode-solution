// Two Sum

const nums = [3,2,4]
const target = 6

function twoSum(nums, target) {
    let result = []

    for(let i = 0; i < nums.length; i++) {
        for(let j = 0; j < nums.length; j++) {
            if(nums[j] + nums[i] === target && i !== j) {
                result [i, j]

                return result;
            }
        }
    }

    return result;
};

console.log("ini ururan", twoSum(nums, target))