function nodeDepths(root) {
    return helper(root, sum = 0);
    function helper(node, sum) {
        if (node === null) {
            return 0
        }
        console.log(sum, 'sum', node.value)
        return (sum + helper(node.left, sum + 1) + helper(node.right, sum + 1))
    }
}
// This is the class of the input binary tree.
class BinaryTree {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}
