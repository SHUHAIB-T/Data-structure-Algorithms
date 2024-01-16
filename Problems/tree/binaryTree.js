// implimentation of binary tree.
class BinaryTreeNode {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
    
    insertLeft(value) {
        this.left = new BinaryTreeNode(value);
    }
    insertRight(value) {
        this.right = new BinaryTreeNode(value);
    }
}

{/* 
<> Preorder		Root -> Left -> Right 
<> Inorder		Left -> Root -> Right
<> Postorder	Left -> Right -> Root 
*/}


// Preorder		Root -> Left -> Right 
function preorderTaraversl(root) {
    if (!root) return;
    console.log(root.data);
    preorderTaraversl(root.left);
    preorderTaraversl(root.right);
}

// Postorder	Left -> Right -> Root 
function postorderTaraversl(root) {
    if (!root) return;
    postorderTaraversl(root.left);
    postorderTaraversl(root.right);
    console.log(root.data);
}

// Inorder		Left -> Root -> Right
function inorderTraversal(root) {
    if (!root) return;
    inorderTraversal(root.left);
    console.log(root.data);
    inorderTraversal(root.right);
}

function search(node, key) {
    if (!node) {
        return false;
    }
    if (node.value === key) {
        return true;
    }
    if (search(node.left, key) || search(node.right, key)) {
        return true;
    }
    return false;
}

let root = new BinaryTreeNode(1);

root.insertLeft(2);
root.insertRight(3);
root.left.insertLeft(4);
root.left.insertRight(5);

console.log("Preorder Taraversal: ");
preorderTaraversl(root);

console.log("Postorder Traversal");
postorderTaraversl(root);

console.log("Inorder Traversal");
inorderTraversal(root);
