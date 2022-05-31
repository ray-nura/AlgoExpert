function mergeOverlappingIntervals(array) {
    "intervals": [[1, 2], [3, 5], [4, 7], [6, 8], [9, 10]]
    [[1, 2], [3, 8], [9, 10]]
    const sortArr = array.sort((a, b) => a[0] - b[0]);

    const merged = [];
    let curr = sortArr[0];
    merged.push(curr);
    for (let next of sortArr) {
        const [first, end] = curr;
        const [firstNext, endNext] = next;
        if (end >= firstNext) {
            curr[1] = Math.max(end, endNext)
        } else {
            curr = next;
            merged.push(curr)
        }

    }

    return merged;
}