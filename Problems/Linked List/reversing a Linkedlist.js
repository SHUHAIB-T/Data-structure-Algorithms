/*
write a javascript  code for reversing a linear Linked list.
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
    // checking the the linked list is empty or not.
    isEmpty() {
        return this.size === 0;
    }

    // prepend method. add value in the begining of a linked list.
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

    // add value to the end of the linked list.
    append(value) {
        let node = new Node(value);

        if (this.isEmpty()) {
            this.head = node;
        } else {
            let current = this.head;
            while (current.next) {
                current = current.next;
            }
            current.next = node;
        }
        this.size++;
    }

    //  print a linked list.
    print() {
        if (this.isEmpty()) {
            console.log("Empty Linked list");
        } else {
            let current = this.head;
            let output = '';
            while (current) {
                output += `${current.value},`;
                current = current.next;
            }
            console.log(output);
        }
    }

    reverse() {
        let prev = null;
        let current = this.head;
        while (current) {
            let next_node = current.next;
            current.next = prev;
            prev = current;
            current = next_node;
        }
        this.head = prev;
    }
}

let list = new LinkedList();
list.append(10)
list.append(20)
list.append(30)
list.prepend(50)
list.reverse();
list.print();
