// implementation of Binary Search tree;

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
    isEmpty() {
        return this.root === null;
    }
    insert(value) {
        const newNode = new Node(value);
        if (this.isEmpty()) {
            this.root = newNode;
        } else {
            this.insertNode(this.root, newNode);
        }
    }

    insertNode(root, newNode) {
        if (root.value > newNode.value) {
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
    search(root, key) {
        if (!root) {
            return false;
        } else {
            if (root.value === key) {
                return true;
            } else if (root.value < key) {
                return this.search(root.left, key);
            } else {
                return this.search(root.right, key);
            }
        }
    }
    preorderTraversal(root) {
        if (root) {
            console.log(root.value);
            this.preorderTraversal(root.left);
            this.preorderTraversal(root.right);
        }
    }
    inorderTraversal(root) {
        if (root) {
            this.inorderTraversal(root.left);
            console.log(root.value);
            this.inorderTraversal(root.right);
        }
    }
    postorderTraversal(root){
        if(root){
            this.postorderTraversal(root.left);
            this.postorderTraversal(root.right);
            console.log(root.value);
        }
    }

    
}

let bst = new BinarySearchTree();

bst.insert(10);
bst.insert(5);
bst.insert(15);
bst.insert(3);
bst.insert(7);

// console.log(bst.search(bst.root, 10));

bst.inorderTraversal(bst.root);