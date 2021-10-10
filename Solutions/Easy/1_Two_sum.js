/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
 var twoSum = function(nums, target) {
    
    let result = {}
    let x = 0 ; 
    for (let i = 0 ; i < nums.length ; i++){
       if(result[nums[i]] !== undefined) return [result[nums[i]] , i]
        result[target-nums[i]] = i
    }

  
};