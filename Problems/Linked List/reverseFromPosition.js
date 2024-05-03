/**
 *  reverse a liked list from a given position.
 */


class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class LinedList {
    constructor() {
        this.head = null;
    }

    append(value) {
        const newNode = new Node(value);
        if (!this.head) {
            this.head = newNode;
        } else {
            let current = this.head;
            while (current.next) {
                current = current.next;
            }
            current.next = newNode;
        }
    }

    display() {
        let output = "";
        let current = this.head;
        while (current) {
            output += `${current.value} => `
            current = current.next;
        }
        console.log(output)
    }

    reverse(pos) {
        if (!this.head) return "Linked list is empty";
        let current = this.head;
        let prev = null;
        while (pos > 1) {
            prev = current;
            current = current.next;
            pos--
        }
        const nextHead = this._reverse(current);
        prev.next = nextHead;
    }
    _reverse(head) {
        let prev = null
        while (head) {
            let nextNode = head.next;
            head.next = prev
            prev = head
            head = nextNode
        }
        return prev
    }
}


const myList = new LinedList;

myList.append(20)
myList.append(19)
myList.append(29)
myList.append(48)
myList.display()
myList.reverse(2)
myList.display()