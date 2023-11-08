class Node {
    constructor(value) {
        this.value = value;
        this.right = null;
        this.left = null;
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

    inorderTraversal(root) {
        if (root) {
            this.inorderTraversal(root.left);
            console.log(root.value);
            this.inorderTraversal(root.right);
        }
    }

    delete(value) {
        this.root = this.deleteNode(this.root, value);
    }

    deleteNode(root, value) {
        if (!root) {
            return root;
        }
        if (value < root.value) {
            root.left = this.deleteNode(root.left, value);
        } else if (value > root.value) {
            root.right = this.deleteNode(root.right, value);
        } else {
            // when the value finds

            if (!root.left && !root.right) {
                return null; // delete the node when having no childs
            } else if (!root.right) {
                return root.left; // replace the node with its child;
            } else if (!root.left) {
                return root.right // replace the node with its child
            } else {
                // if the node have 2 child copy the value of inorder Successor and delete it
                root.value = this.min(root.right);
                root.right = this.deleteNode(root.right, root.value);
            }
            return root;
        }
    }

    min(root){
        if(!root.left){
            return root.value;
        }else {
            return this.min(root.left);
        }
    }


}

let bst = new BinarySearchTree();

bst.insert(10);
bst.insert(7);
bst.insert(15);
bst.insert(5);
bst.insert(3);
// bst.inorderTraversal(bst.root)
bst.delete(10);
console.log(bst.root);
