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
    }

    pop(){
        if(!this.top) return "stcak underflow";
        let value = this.top.data;
        this.top = this.top.next;
        return value;
    }
}

const reverse = (str) => {
    let string = str.split("");
    let stack = new Stack();
    for(let i = 0; i < string.length; i++){
        stack.push(string[i]);
    }

    // reversing loop
    for(let i = 0; i < string.length; i++){
        string[i] = stack.pop();
    }

    return string.join("")
}

let string = "hello world";
console.log(reverse(string));