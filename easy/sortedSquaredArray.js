function sortedSquaredArray(array) {
    let newArr = [];
    if (!array.length) { return newArr };
    if (array.length === 1) { newArr[0] = array[0] ** 2; return newArr };
    let left = 0;
    let right = array.length - 1;
    for (let i = array.length - 1; i >= 0; i--) {
        if (Math.abs(array[left]) > Math.abs(array[right])) {
            newArr[i] = array[left] ** 2;
            left++;
        } else {
            newArr[i] = array[right] ** 2;
            right--;
        }
    }
    return newArr;
}
