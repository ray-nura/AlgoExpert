
function twoNumberSum(array, targetSum) {
    // Write your code here.
    const nums = {};
    let val;
    for (let i = 0; i < array.length; i++) {
        val = targetSum - array[i];
        if (nums.hasOwnProperty(val)) return [array[i], val]
        else {
            nums[array[i]]++
        }
    }
    return []
}
/* 
{
  "array": [3, 5, -4, 8, 11, 1, -1, 6],
  "targetSum": 10
  {
  "array": [4, 6],
  "targetSum": 10
}
}
*/

