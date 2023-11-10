class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

class BST {
    constructor() {
        this.root = null;
    }

    insert(data) {
        let node = new Node(data);
        if (!this.root) {
            this.root = node;
        } else {
            this.insertNode(this.root, node);
        }
    }
    insertNode(root, node) {
        if (root.data < node.data) {
            if (!root.left) {
                root.left = node;
            } else {
                this.insertNode(root.left, node);
            }
        } else {
            if (!root.right) {
                root.right = node;
            } else {
                this.insertNode(root.right, node);
            }
        }
    }
    

}