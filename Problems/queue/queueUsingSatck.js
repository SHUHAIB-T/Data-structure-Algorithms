class Stack {
    constructor() {
        this.elements = [];
    }

    push(value) {
        this.elements.push(value);
    }

    pop() {
        return this.elements.pop();
    }
}

class Queue {
    constructor() {
        this.s1 = new Stack();
        this.s2 = new Stack();
    }

    enqueue(value) {
        while (this.s1.elements.length !== 0) {
            this.s2.push(this.s1.pop());
        }
        this.s1.push(value);

        while (this.s2.elements.length !== 0) {
            this.s1.push(this.s2.pop());
        }
    }

    dequeue() {
        if (this.s1.elements.length === 0) return 'queue is empty'
        return this.s1.pop();
    }

    display() {
        if (this.s1.elements.length === 0) {
            console.log('queue is empty')
            return
        }
        console.log(this.s1.elements.toString());
    }

}

let queue = new Queue();
queue.enqueue(10);
queue.enqueue(30);
queue.enqueue(20);
queue.dequeue();
queue.display()