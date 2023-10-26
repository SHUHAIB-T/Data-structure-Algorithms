/*
insert a node in position x.
*/


// node class
class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

// linked list class
class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }
    isEmpty() {
        return this.size === 0;
    }
    append(data){
        const node = new Node(data);
        
        if(this.isEmpty()){
            this.head = node;
            this.size++;
            return;
        }
        let current = this.head;
        while(current.next){
            current = current.next;
        }
        current.next = node;
        this.size++;
        return;
    }


    // insert a node after a node(pos).
    insert(pos, val) {
        let node = new Node(val);
        let current = this.head;
        while (current) {
            if (current.next.next.value === pos) {
                node.next = current.next;
                current.next = node;
                this.size++;
                break;
            }
            current = current.next;
        }

    }

    print(){
        if(this.isEmpty()){
            console.log("Empty List");
            return;
        }
        let current = this.head;
        let output = "";
        while(current){
            output += `${current.value}, `;
            current = current.next;
        }
        console.log(output);
    }
}

let list = new LinkedList();
list.append(20);
list.append(10);
list.append(40);
list.append(30);
list.insert(30,100)
list.print();