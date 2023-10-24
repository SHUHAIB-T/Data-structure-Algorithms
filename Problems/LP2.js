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
    append(value) {
        let node = new Node(value);
        let temp = this.head;
        if (this.isEmpty()) {
            this.head = node;
        } else {
            while (temp.next != null) {
                temp = temp.next;
            }
            temp.next = node;
        }
        this.size++;
    }
    delete(value) {
        if(this.isEmpty()){
            return;
        }
        if(this.head.value === value){
            
        }
        let current = this.head;
        let prev = null;
        while (current != null) {
            if (current.value === value) {
                prev.next = current.next;
                this.size--;
                return;
            }
            prev = current;
            current = current.next;
        }
    }

    print() {
        if (this.isEmpty()) {
            console.log("Empty LinkedList");
        } else {
            let output = "";
            let current = this.head;
            while (current != null) {
                output += `${current.value},`;
                current = current.next;
            }
            console.log(output);
        }
    }
}
let list = new LinkedList();
list.append(10)
list.append(30)
list.append(20)
list.print();