class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class Queue {
    constructor() {
        this.front = null;
        this.back = null;
        this.size = 0;
    }

    enqueue(value) {
        let node = new Node(value);
        if (this.back === null) {
            this.front = node;
        } else {
            this.back.next = node;
        }
        this.back = node;
    }
    dequeue() {
        if (!this.front) return "Empty Queue";
        const frontData = this.front.data;
        this.front = this.front.next;
        if (!this.front) this.back = null;

        return frontData;
    }

    peak() {
        if (!this.front) return "Empty Queue";
        return this.front.data;
    }

    display(){
        if(!this.front){
            console.log("Empty Queue");
            return
        }
        let current = this.front;
        let output = "";
        while(current){
            output += `${current.data}, `;
            current = current.next;
        }
        console.log(output);
    }
}

let queue = new Queue();
queue.enqueue(10)
queue.enqueue(20)
queue.enqueue(30)
queue.enqueue(40)
queue.dequeue();
queue.display();