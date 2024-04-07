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
# Quick view thorugh all the sorting algorithms
````js
function insertionSort(arr){
    for(let i=0; i< arr.length -1; i++){
        for(let j=i+1; j > 0; j++){
            if(arr[j] < arr[j-1]){
                // swap
                [arr[j], arr[j-1]] = [arr[j-1], arr[j]];
            }else {
                break;
            }
        }
    }
    
    return arr;
}

function selectionSort(arr){
    for(let i=0; i< arr.length -1; i++){
        for(let j= i+1; j< arr.length; j++){
            if(arr[j] < arr[i]){
                // swap
                [arr[i], arr[j]] = [arr[j], arr[i]];
            }
        }
    }
    return arr;
}


function bubbleSort(arr){
    let swapped;
    do{
        swapped = false;
        for(let i=0; i< arr.length ;i++){
            if(arr[i] > arr[i+1]){
                // swap
                [arr[i], arr[i+1]] = [arr[i+1], arr[i]]
                swapped = true;
            }
        }
    }while(swapped);
    
    return arr;
}

function quickSort(arr){
    // base case;
    if(arr.length <= 1){
        return arr;
    }
    
    let left = [];
    let right = [];
    let pivot = arr[0];
    
    for(let i=1; i< arr.length ;i++){
        if(arr[i] < pivot){
            left.push(arr[i])
        }else{
            right.push(arr[i])
        }
    }
    return quickSort(left).concat(pivot, quickSort(right))
}

function mergeSort(arr){
    // base case
    if(arr.length === 1){
        return arr;
    }
    let mid = parseInt(arr.length/2);
    let left = mergeSort(arr.slice(0, mid));
    let right = mergeSort(arr.slice(mid, arr.length));
    
    return merge(left, right);
}

function merge(left , right){
    const newArray = new Array(left.length + right.length);
    let i = j = k = 0;
    while(i< left.length && j< right.length){
        if(left[i] < right[j]){
            newArray[k] = left[i];
            i++;
        }else{
            newArray[k] = right[j];
            j++
        }
        k++;
    }
    
    while(i< left.length){
        newArray[k] = left[i];
        i++;
        k++
    }
    while(j< right.length){
        newArray[k] = right[j];
        j++;
        k++
    }
    
    return newArray;
}

let arr = [3,2,4,5,1];
console.log("selection sort => ", selectionSort(arr));
console.log("bubble sort    => ", bubbleSort(arr));
console.log("insertion sort => ", insertionSort(arr));
console.log("quick sort     => ", quickSort(arr));
console.log("merge sort     => ", mergeSort(arr));
````