/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let uniqueIndex = 0;
    let count = 1;
    for (let i=0; i<nums.length; ++i){
    const num = nums[i];
    const uniqueNum = nums[uniqueIndex];

    if (num !== uniqueNum){
        nums[uniqueIndex+1] = num;
        ++uniqueIndex;
        ++count;
    }
    }

    return count;
};
