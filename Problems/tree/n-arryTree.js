// implimentation of N-ary Tree

class TreeNode{
    constructor(value){
        this.value = value;
        this.children = [];
    }

    addChild(childNode){
        this.children.push(childNode);
    }

    removeChild(value){
        this.children = this.children.filter(child => child.value !== value);
    }
}

let root = new TreeNode('root');
let child1 = new TreeNode('child1');
let child2 = new TreeNode('child2');

root.addChild(child1);
root.addChild(child2);

console.log(root.children);

root.removeChild('child1');

console.log(root.children);