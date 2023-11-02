class Queue {
    constructor() {
        this.elements = [];
    }
    enqueue(value) {
        this.elements.push(value);
    }

    dequeue(value) {
        if (this.elements.length === 0) return "Queue is empty"
        return this.elements.shift();
    }

    peak() {
        return this.elements[0];
    }

    rear() {
        return this.elements[this.elements.length - 1];
    }

    display() {
        if (this.elements.length === 0) console.log("Queue is empty");
        else {
            console.log(this.elements.toString());
        }
    }
}

let queue = new Queue();
queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);
queue.enqueue(40);
queue.dequeue();
queue.display()

