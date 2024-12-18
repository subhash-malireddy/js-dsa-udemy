/**
 * Sliding Window - maxSubarraySum

Given an array of integers and a number, write a function called maxSubarraySum, which finds the maximum sum of a subarray with the length of the number passed to the function.

Note that a subarray must consist of consecutive elements from the original array. In the first example below, [100, 200, 300] is a subarray of the original array, but [100, 300] is not.

    maxSubarraySum([100,200,300,400,600], 2) // 700
    maxSubarraySum([1,4,2,10,23,3,1,0,20], 4)  // 39 
    maxSubarraySum([-3,4,0,-2,6,-1], 2) // 5
    maxSubarraySum([3,-2,7,-4,1,-1,4,-2,1],2) // 5
    maxSubarraySum([2,3], 3) // null
    
    Constraints:
    
    Time Complexity - O(N)
    
    Space Complexity - O(1)
    */

function maxSubarraySum(array, n) {
    const arrLen = array.length;
    if (n > arrLen) return null;

    let max = array.slice(0, n).reduce((acc, item) => acc + item, 0);
    let currentWindowSum = max;
    const topLimit = arrLen - n;
    for (let i = 0; i < topLimit; i++) {
        const toSubtract = array[i];
        const toAdd = array[i + n];
        currentWindowSum = currentWindowSum - toSubtract + toAdd;

        max = Math.max(max, currentWindowSum);
    }
    return max;
}

const res = maxSubarraySum([-3, 4, 0, -2, 6, -1], 2)
console.log("🚀 ~ res:", res)