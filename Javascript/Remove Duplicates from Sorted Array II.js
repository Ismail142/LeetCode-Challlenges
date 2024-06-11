/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let uniqueIndex = 0;
    let count = 1;
    let uniqueAppear = 1;
    for (let i=1; i<nums.length; ++i){
    const num = nums[i];
    const uniqueNum = nums[uniqueIndex];

    if (num !== uniqueNum || (num===uniqueNum && uniqueAppear<2)){
        nums[uniqueIndex+1] = num;
        ++uniqueIndex;
        ++count;
        num !== uniqueNum ? uniqueAppear = 1:  ++uniqueAppear;
    }

    }

    return count;
};
