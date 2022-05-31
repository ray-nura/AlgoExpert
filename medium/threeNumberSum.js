function threeNumberSum(array, targetSum) {
    // Write your code here.
    // [12, 3, 1, 2, -6, 5, -8, 6] 0
    // [-8, -6, 1 2 3 5 6 12]
    // [-8, 2 6]  [ -8 3 5] [-6 1 5]
    array.sort((a, b) => a - b);
    const arr = [];
    for (let i = 0; i < array.length - 2; i++) {
        let right = array.length - 1;
        let left = i + 1
        while (left < right) {
            const curSum = array[i] + array[left] + array[right];
            if (curSum === targetSum) {
                arr.push([array[i], array[left], array[right]]);
                left++;
                right--;
            } else if (curSum < targetSum) {
                left++
            } else if (curSum > targetSum) {
                right--;
            }
        }
    }
    return arr

}

