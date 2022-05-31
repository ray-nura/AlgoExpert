function globMatching(fileName, pattern) {
    // Write your code here.
    const table = createTable(fileName, pattern);

    for (let i = 1; i <= fileName.length; i++) {
        for (let j = 1; j <= pattern.length; j++) {

            if (pattern[j - 1] === '*') {
                table[i][j] = table[i][j - 1] || table[i - 1][j];

            } else if (pattern[j - 1] === '?' || pattern[j - 1] === fileName[i - 1]) {
                table[i][j] = table[i - 1][j - 1]
            }
        }
    }
    return table[fileName.length][pattern.length]
}

function createTable(str, pattern) {
    const table = [];
    for (let i = 0; i <= str.length; i++) {
        const row = [];
        for (let j = 0; j <= pattern.length; j++) {
            row.push(false)
        }
        table.push(row)
    }

    table[0][0] = true;
    for (let j = 1; j <= pattern.length; j++) {
        if (pattern[j - 1] === '*') {
            table[0][j] = table[0][j - 1]
        }
    }
    return table
}