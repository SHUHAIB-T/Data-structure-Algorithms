# Data Structuress & algorithms
- ### what is Data Structures?
    - data structure is a storage that used to store and organize data. it is not only for organizing data, it is also used for analysing and retrieving data.
    
    - memory allocation is a process of reserving physical memory of the computer for the exicution of the program.

## Arrays in javs script
- Arrays are collection of items stored in a contiguous memory locaton.  Javascript  array is a single variable that used to store defferent elements of deffrent data types.

Declaration of an Array.
````JS

// decleration 
const array = [value1,value2,...];

// initializing while declaring
let course = ["HTML","CSS","JavaScript"];
console.log(course);

// creating an array using new variable.
let arr = new Array(10).fill(0); //this will create a new array with length 10 and filled with zero.

// converting an array to strintg
console.log(arr.toString());

// we can decrease or increase the length of the array using the length property of the array.
let arr = [1, 2, 3];
arr.length = 2;//length decreased to two.
arr.length = 5; //length increased to 5.

// loop throough arrays
for (let i = 0; i < arr.length; i++){
    console.log(arr[i]);
}

// adding new elements to array. using javascript push method we can add new element at the end of array.
arr.push(2); //this will return the legth of the new array.

// adding new elements to array. using arr.length property.
arr(arr.length)= 3;

// dleting an element at the end of array
arr.pop();//this will return the length of the new array.

````
- basic operations on arrays 
    - init(o(n)S o(1)T)
    - set [o(1)ST]
    - get [o(n)T o(1)S]
    - delete [o(n)T o(1)]
    - traverse [o(n)ST]
    - insert [o(n)T o(1)T]


## LinkedList in Javascript

- it is a linear data struture where elements are stored in none contigious memory spaces.

````JS
// node class
class node{
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
        if(thisd.isEmpty()){
            node.head = node;
        }else{
            node.next = this.head;
            node.head = node;
        }
        this.size++;
    }

    print(){
        if(this.isEmpty()){
            console.log("this is ann empty LinkedList")
        }else{
            let temp = this.head;
            let output ='';
            while(temp){
                output += `${temp.value},`;
            }
            console.log(output);
        }
    }
    
}
````