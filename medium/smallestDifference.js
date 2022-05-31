function smallestDifference(arrayOne, arrayTwo) {
    // Write your code here.
    // "arrayOne": [-1, 5, 10, 20, 28, 3], [-1 3 5 10 20 28]
    // "arrayTwo": [26, 134, 135, 15, 17]. [15 17 26 134 135]

    arrayOne.sort((a, b) => a - b);
    arrayTwo.sort((a, b) => a - b);
    let small = Infinity; // -16
    let currDiff = Infinity;
    let indOne = 0;
    let indTwo = 0;
    let arr = [];

    while (indOne < arrayOne.length && indTwo < arrayTwo.length) {
        let firstNum = arrayOne[indOne];
        let secondNum = arrayTwo[indTwo];

        if (firstNum === secondNum) {
            return [firstNum, secondNum]
        } else if (firstNum > secondNum) {  // -1 15
            currDiff = firstNum - secondNum
            indTwo++;
        } else if (firstNum < arrayTwo[indTwo]) { // -1 15 => 3 15 => 5 15 => 10 15=> 20 15 
            currDiff = secondNum - firstNum // 16    
            indOne++;
        }
        console.log(arr)
        if (small > currDiff) {
            small = currDiff;
            arr = [firstNum, secondNum]
        }

    }
    return arr


}
