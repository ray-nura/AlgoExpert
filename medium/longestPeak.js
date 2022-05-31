function longestPeak(array) {
    // Write your code here.
    let longestPeak = 0;
    let i = 1;
    while (i < array.length - 1) {
        const peak = array[i - 1] < array[i] && array[i] > array[i + 1];
        if (peak) {

            let left = i - 1;
            while (left >= 0 && array[left] < array[left + 1]) {
                left--;
            }

            let right = i + 1;
            while (right < array.length && array[right] < array[right - 1]) {
                right++;
            }

            const currLength = right - left - 1;
            console.log(left, right)
            longestPeak = Math.max(longestPeak, currLength)

            i = right
        } else {
            i++;
        }

    }
    return longestPeak;
}
// "array": [1, 2, 3, 3, 4, 0, 10, 6, 5, -1, -3, 2, 3]
// left 2  right 6 ==> 3
// left 4  right 11 ==> 6
