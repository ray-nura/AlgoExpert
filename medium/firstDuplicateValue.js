function firstDuplicateValue(array) {

    const arr = new Set();
    for (const val of array) {
        if (arr.has(val)) return val;
        arr.add(val)
    }
    return -1;
}