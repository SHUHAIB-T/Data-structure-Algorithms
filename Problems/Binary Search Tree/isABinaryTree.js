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
        if (root.data > node.data) {
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

    delete(value) {
        this.root = this.deleteNode(this.root, value);
    }

    deleteNode(root, value) {
        if (!root) {
            return root;
        }
        if (value < root.data) {
            this.deleteNode(root.left, value);
        } else if (value > root.right) {
            this.deleteNode(root.left, value);
        } else {
            // when the value finds
            if (!root.left && !root.right) {
                // if the root has no children
                return null;
            } else if (!root.right) {
                return root.right
            } else if (!root.left) {
                return root.left;
            } else {
                // when the node has two children
                // find replace the node with inorder succeessor
                // and delete it.
                root.value = this.min(root.right);
                root.right = this.deleteNode(root.right, root.value);

            }
        }
    }
    min(root) {
        if (!root.left) {
            return root.value;
        } else {
            return this.min(root.left);
        }
    }

    // function for checking is a Binary Tree or not;
    isValid() {
        if (!this.root) return null;
        return this._isvalid(this.root, Number.MIN_SAFE_INTEGER, Number.MAX_SAFE_INTEGER);
    }
    _isvalid(root, minimum, maximum) {
        if (!root) return true;
        if (root.data < minimum || root.data > maximum) {
            return false;
        } else {
            return this._isvalid(root.right, root.data, maximum) && this._isvalid(root.left, minimum, root.data);
        }

    }

    inOrderTraversal(root){
        if(root){
            this.inOrderTraversal(root.left);
            console.log(root.data);
            this.inOrderTraversal(root.right);
        }
    }

}

let bst = new BST();
bst.insert(10);
bst.insert(12);
bst.insert(17);
bst.insert(5);
bst.inOrderTraversal(bst.root)
console.log(bst.isValid());