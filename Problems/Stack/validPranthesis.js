class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class Stack {
    constructor() {
        this.top = null;
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

    pop() {
        if (!this.top) return "stack underflow";
        let data = this.top.data;
        this.top = this.top.next;
        return data;
    }
}

const isBalanced = (brackets) => {
    let bracket = brackets.split("");
    let pair = {
        '{': '}',
        '[': ']',
        '(': ')'
    }
    let stack = new Stack();
    for (let brac of bracket) {
        if (brac === '{' || brac === '[' || brac === '(') {
            stack.push(brac);
            continue;
        } else {
            if(!stack.top) return "unbalanced";
            let opening = stack.pop();
            if(pair[opening] != brac) return "unbalanced";
        }
    }
    return "balanced";
}

console.log(isBalanced('[()]{}{[{}()()]()}'));