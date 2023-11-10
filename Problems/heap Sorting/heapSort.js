//  implimentstion of herap sorting

class Heap {
    constructor() {
        this.heap = [];
    }

    getParentIndex(index) {
        return Math.floor((index - 1) / 2);
    }
    getLeftChildIndex(parentIndex) {
        return (2 * parentIndex + 1);
    }
    getRightChildIndex(parentIndex) {
        return (2 * parentIndex + 2);
    }
    hasLeftChild(index) {
        return this.getLeftChildIndex(index) < this.heap.length;
    }
    hasRightChild(index) {
        return this.getRightChildIndex(index) < this.heap.length;
    }
    hasParent(index) {
        return this.getParentIndex(index) >= 0;
    }

    swap(index1, index2) {
        [this.heap[index1], this.heap[index2]] = [this.heap[index2], this.heap[index1]];
    }
    parent(index) {
        return this.heap[this.getParentIndex(index)];
    }

    add(item) {
        this.heap.push(item);
        this.heapifyUp();
    }
    heapifyUp() {
        let index = this.heap.length - 1;
        while (this.hasParent(index) && this.parent(index) > this.heap[index]) {
            this.swap(this.getParentIndex(index), index);
            index = this.getParentIndex(index);
        }
    }

    remove() {
        let value = this.heap[0];
        this.heap[0] = this.heap.pop();
        this.heapifyDown();
        return value;
    }
    rightChild(index) {
        return this.heap[this.getRightChildIndex(index)];
    }
    leftChild(index) {
        return this.heap[this.getLeftChildIndex(index)];
    }

    heapifyDown() {
        let index = 0;
        while (this.hasLeftChild(index)) {
            let smallestChildIndex = this.getLeftChildIndex(index);
            if (this.hasRightChild(index) && this.rightChild(index) < this.leftChild(index)) {
                smallestChildIndex = this.getRightChildIndex(index);
            }

            if (this.heap[index] < this.heap[smallestChildIndex]) {
                break;
            } else {
                this.swap(index, smallestChildIndex);
            }
            index = smallestChildIndex;
        }
    }

    printHeap() {
        let output = "";
        for (const item of this.heap) {
            output += `${item}, `;
        }
        console.log(output);
    }

}

let arr = [4, 3, 1, 2, 5];

const heapSort = (arr) => {
    let heap = new Heap();
    for(let i = 0 ; i< arr.length;i++){
        heap.add(arr[i]);
    }
    let result = [];
    for(let i =0 ; i< arr.length; i++){
        result.push(heap.remove());
    }

    return result;
}

console.log(heapSort(arr));