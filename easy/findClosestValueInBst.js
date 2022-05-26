function findClosestValueInBst(tree, target) {
    // Write your code here.
    return helper(tree, tree.value)

    function helper(tree, closest) {
        if (tree == null) return closest;

        if (Math.abs(target - tree.value) < Math.abs(target - closest)) {
            closest = tree.value
        } console.log(tree.value)
        if (tree.value > target) {
            return helper(tree.left, closest)
        } else if (tree.value < target) {
            return helper(tree.right, closest)
        } else {
            return closest
        }
    }

}

// This is the class of the input tree. Do not edit.
class BST {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

