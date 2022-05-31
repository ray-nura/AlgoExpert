function spiralTraverse(array) {
    // Write your code here.
    // "array": [
    //   [1,  2,  3,  4],
    //   [12, 13, 14, 5],
    //   [11, 16, 15, 6],
    //   [10,  9,  8,  7]
    // ]
    // row array[0].length-1  = 3
    // col array.length -1.   = 3
    // StartRow  SR SC [0][0]
    // SC 
    // [ [00] [01] [02] [03] // [13] [23] [33] // [32] [31] [30] // [20] [10] // [11] [12] // [22] []
    let result = []
    let sr = 0;
    let er = array.length - 1;
    let sc = 0;
    let ec = array[0].length - 1;

    while (sr <= er && sc <= ec) {
        for (let col = sc; col <= ec; col++) {
            result.push(array[sr][col])
        }

        for (let row = sr + 1; row <= er; row++) {
            result.push(array[row][ec])
        }
        for (let col = ec - 1; col >= sc; col--) {
            if (sr === er) break;
            result.push(array[er][col])
        }
        for (let row = er - 1; row > sr; row--) {
            if (sc === ec) break
            result.push(array[row][sc])
        }

        sr++;
        er--;
        sc++;
        ec--;

    }
    return result

}

