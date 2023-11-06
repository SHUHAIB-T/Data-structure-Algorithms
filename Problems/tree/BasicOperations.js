// the basic operations in tree.
{/* 
<> Preorder		Root -> Left -> Right 
<> Inorder		Left -> Root -> Right
<> Postorder	Left -> Right -> Root 
*/}

class TreeNode {
    constructor(value) {
        this.value = value;
        this.children = [];
    }

    add_child(chidNode) {
        this.children.push(chidNode);
    }

}

// preorder traversal in tree.
function preordertree(node) {
    console.log(node.value, " ");
    for (const child of node.children) {
        preordertree(child);
    }
}

function postordertree(node) {
    for (const child of node.children) {
        preordertree(child)
    }
    console.log(node.value, " ");
}

function search(root, value) {
    if (!root) return false;
    for (const child of root.children) {
        let result = search(child, value);
        if (result) return result;
    }
    return false;
}

function deleteNode(root, value) {
    if (!root) return null;
    if (root.value === value) return true;
    root.children = root.children.filter(child => child.value !== value);
    for (const child of root.children) {
        deleteNode(child, value);
    }
    return root;
}


// testing
const root = new TreeNode("Root");
const child1 = new TreeNode("Child1");
const child2 = new TreeNode("Child2");

root.add_child(child1);
root.add_child(child2);

preordertree(root)

console.log(search(root, "Child1"))