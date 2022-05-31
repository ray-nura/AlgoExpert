function isMonotonic(array) {
    // Write your code here.
    let isDec = true;
    let isInc = true;
    for (let i = 1; i < array.length; i++) {
        if (array[i - 1] < array[i]) { isDec = false }
        if (array[i - 1] > array[i]) { isInc = false }
        console.log(isDec, isInc, isDec || isInc)
    }
    console.log(isDec, isInc, isDec || isInc, 'last')
    return isDec || isInc
}
// "array": [-1, -5, -10, -1100, -1100, -1101, -1102, -9001]