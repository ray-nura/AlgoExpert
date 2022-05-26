class BinaryTree {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

function branchSums(root) {
    const sumOfArray = [];
    brunchSums(root, 0);

    function brunchSums(node, currSum) {
        if (!node) return;
        currSum = currSum + node.value;
        if (!node.left && !node.right) {
            sumOfArray.push(currSum);
            return;
        }
        brunchSums(node.left, currSum)
        brunchSums(node.right, currSum)
    }
    return sumOfArray;
}