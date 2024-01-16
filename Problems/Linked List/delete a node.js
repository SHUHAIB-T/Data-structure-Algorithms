/*
delete a node after a node. 
*/


class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }
    isEmpty() {
        return this.size === 0;
    }

    prepend(value) {
        let node = new Node(value);
        if (this.isEmpty()) {
            this.head = node;
        } else {
            node.next = this.head;
            this.head = node;
        }
        this.size++;
    }
    removeElement(value) {
        if (value === this.head) {
            this.head = this.head.next;
            this.size--;
            return;
        }
        let current = this.head;
        while (current) {
            if (current.next.value === value) {
                current.next = current.next.next;
                this.size--;
                break;
            }
            current = current.next;
        }
    }

    // delete all the duplicate Elements.
    deletAllDuplicates() {
        let current = this.head;
        while (current) {
            let next = current.next;
            while (next) {
                if (current.value == next.value) {
                    this.removeElement(next.value);
                }
                next = next.next;
            }
            current = current.next;
        }
    }

    print() {
        if (this.isEmpty()) {
            console.log("the List is Empty");
        } else {
            let current = this.head;
            let output = "";
            while (current) {
                output += `${current.value}, `
                current = current.next;
            }
            console.log(output);
        }
    }
}

const list = new LinkedList();

list.prepend(10);
list.prepend(12);
list.prepend(14);
list.prepend(10);
list.prepend(14);
list.prepend(10);
list.deletAllDuplicates();
list.print();