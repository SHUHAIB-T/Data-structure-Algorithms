class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
    }
    insert(value) {
        let node = new Node(value);
        if (!this.root) {
            this.root = node;
        } else {
            this.insertNode(this.root, node);
        }
    }
    insertNode(root, node) {
        if (node.value < root.value) {
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
    search(root, value) {
        if (!root) return false; // no such value found.
        if (root.value === value) {
            return true;
        } else if (value < root.value) {
            return this.search(root.left, value);
        } else {
            return this.search(root.right, value);
        }
    }

    findClosest(data) {
        if (!this.root) return null;
        return this._findClosest(this.root, data, Number.MAX_SAFE_INTEGER);
    }
    _findClosest(node, data, closest) {
        if (!node) return closest;
        if (Math.abs(data - node.data) < Math.abs(data - closest)) closest = node.data;
        closest = this._findClosest(node.left, data, closest);
        closest = this._findClosest(node.right, data, closest);
        return closest;
    }

}