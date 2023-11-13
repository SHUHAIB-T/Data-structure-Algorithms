/*
converting an array to a linked list.
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

    display(){
        if(this.isEmpty()){
            console.log("Empty List");
        }else{
            let current = this.head;
            let output = "";
            while(current){
                output += `${current.value},`;
                current = current.next;
            }
            console.log(output);
        }
    }
}

let list = new LinkedList();

let arr = [1,24,56,34]; 
// converting an array to linked list
for(let i = 0;i<arr.length;i++){
    list.append(arr[i]);
}
list.display();
