
class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class Stack {
    constructor() {
        this.top = null;
        this.size = 0;
    }

    push(value) {
        let node = new Node(value);
        if (!this.top) {
            this.top = node;
        } else {
            node.next = this.top;
            this.top = node;
        }
        this.size++;
    }
    pull() {
        if (!this.top) return "Stack Underflow";
        let stackTop = this.top.data;
        this.top = this.top.next;
        this.size--;
        return stackTop;
    }
    peak() {
        if (!this.top) return "Stack Underflow";
        return this.top.data;
    }
    display() {
        if (!this.top) console.log("Stack is Empty");
        let curent = this.top;
        while (curent) {
            console.log(curent.data);
            curent = curent.next;
        }
    }
}

let stack = new Stack();
stack.push(20);
stack.push(30);
stack.push(10);
stack.push(40);
stack.display();

console.log("================================================")
console.log(stack.pull()); // delete the top element and return it;
console.log(stack.peak()); // retun the top element