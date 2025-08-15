// Two Sum

const nums = [3,2,4]
const target = 6

function twoSum(nums, target) {

    for(let i = 0; i < nums.length; i++) {
        for(let j = 0; j < nums.length; j++) {
            if(nums[j] + nums[i] === target && i !== j) {
                return [i,j]

            }
        }
    }

    return [];
};
