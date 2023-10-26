/*
here is the example of doubelty linked list
*/

class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
        this.prev = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }

    isEmpty() {
        return this.size === 0;
    }
    append(value) {
        let node = new Node(value);
        if (this.tail === null) {
            this.head = node;
            this.tail = node;
        } else {
            this.tail.next = node;
            node.prev = this.tail;
            this.tail = node;
        }
        this.size++;
    }

    taraverseForward() {
        if (this.isEmpty()) {
            console.log("Empty Linked List")
        } else {
            let current = this.head;
            let output = "";
            while (current) {
                output += `${current.value},`
                current = current.next;
            }
            console.log(output);
        }
    }
    traverseReverse() {
        let current = this.tail;
        let output = "";
        while (current) {
            output += `${current.value},`;
            current = current.prev;
        }
        console.log(output);
    }

    delete(value) {
        if (this.isEmpty()) return;
        if (value === this.head.value) {
            this.head = this.head.next;
            if(this.head === null){
                this.tail = null;
            }
            this.size--;
            return;
        }
        let current = this.head;
        let prev = null;
        while (current) {
            if (current.value === value) {
                if(current === this.tail){
                    this.tail = prev;
                }
                prev.next = current.next;
                this.size--;
                return;
            }
            prev = current;
            current = current.next;
        }
    }
}

let list = new LinkedList();

list.append(10);
list.append(30);
list.append(20);
list.delete(10);
list.traverseReverse()