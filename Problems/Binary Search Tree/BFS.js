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
                this.insert(root.right, newNode);
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

    levelOrder() {
        const queue = [];
        queue.push(this.root);
        while (queue.length) {
            let curent = queue.shift();
            console.log(curent);
            if (curent.left) {
                queue.push(curent.left);
            }
            if (curent.right) {
                queue.push(curent.right);
            }
        }
    }

    asendingOrder(root) {
        if (root) {
            this.asendingOrder(root.right);
            console.log(root.value);
            this.asendingOrder(root.left);
        }
    }

    hightOfTree(root) {
        if (!root) {
            return 0;
        }
        return Math.max(this.hightOfTree(root.left), this.hightOfTree(root.right)) + 1;
    }

    numberOfElemnets(root) {
        if (!root) {
            return 0;
        }

        return this.hightOfTree(root.left) + this.hightOfTree(root.right) + 1;
    }

    delete(root, key) {

    }
}

let bst = new BinarySearchTree();

bst.insert(10);
bst.insert(7);
bst.insert(5);
bst.insert(15);
bst.insert(3);

// bst.asendingOrder(bst.root);
console.log(bst.hightOfTree(bst.root))