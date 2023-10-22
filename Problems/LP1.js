
// implementation of Linked List
class Node{
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

// linked list class
class LinkedList {
    constructor(){
        this.head = null;
        this.size = 0;
    }
    isEmpty(){
        return this.size == 0;
    }
    getSize(){
        return this.size;
    }
    prepend(value){
        let node = new Node(value);
        if(this.isEmpty()){
            this.head = node;
        }else{
            node.next = this.head;
            this.head = node;
        }
        this.size++;
    }

    print(){
        if(this.isEmpty()){
            console.log("this is an empty LinkedList")
        }else{
            let temp = this.head;
            let output ='';
            while(temp != null){
                output += `${temp.value},`;
                temp = temp.next;
            }
            console.log(output);
        }
    }
}


let list = new LinkedList();
list.prepend(10);
list.prepend(20);
list.print();