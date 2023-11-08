class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
    }
    insert(value) {
        const newNode = new Node(value);
        if (!this.root) {
            this.root = newNode;
        } else {
            this.insertNode(this.root, newNode);
        }
    }

    insertNode(root, newNode) {
        if (newNode.value < root.value) {
            if (root.left === null) {
                root.left = newNode;
            } else {
                this.insertNode(root.left, newNode);
            }
        } else {
            if (root.right === null) {
                root.right = newNode;
            } else {
                this.insertNode(root.right, newNode);
            }
        }
    }


    minNode(root) {
        if (!root.left) {
            return root.value;
        } else {
            return this.minNode(root.left);
        }
    }

    maxNode(root) {
        if (!root.right) {
            return root.value;
        } else {
            return this.maxNode(root.right);
        }
    }
}

let bst = new BinarySearchTree();
bst.insert(10);
bst.insert(7);
bst.insert(15);
bst.insert(5);
bst.insert(8);

console.log(bst.maxNode(bst.root));

