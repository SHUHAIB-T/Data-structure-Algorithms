// implimentation of heap datastructure

class MinHeap {
    constructor() {
        this.heap = [];
    }

    getLeftChildIndex(parentIndx) {
        return (2 * parentIndx + 1);
    }
    getRightChildindex(parentIndx) {
        return (2 * parentIndx + 2);
    }

    getParentIndex(childIndex) {
        return ~~(childIndex - 1) / 2;
    }

    hasLeftChildIndex(index) {
        return this.getLeftChildIndex(index) < this.heap.length;
    }
    hasRighttChildIndex(index) {
        return this.getRightChildindex(index) < this.heap.length;
    }
    hasParentindex(index) {
        return this.getParentIndex(index) >= 0;
    }

    leftChild(index) {
        return this.heap[this.getLeftChildIndex[index]]
    }
    rightChild(index) {
        return this.heap[this.getRightChildindex(index)];
    }

    parent(index) {
        return this.heap[this.getParentIndex(index)];
    }

    peak() {
        if (this.heap.length === 0) return null;
        return this.heap[0];
    }
    swap(index1, index2) {
        [this.heap[index1], this.heap[index2]] = [this.heap[index2], this.heap[index1]]
    }

    add(item) {
        this.heap.push(item);
        this.heapifyUp();
    }

    heapifyUp() {
        let index = this.heap.length - 1;
        while (this.hasParentindex(index) && this.parent(index) > this.heap[index]) {
            this.swap(this.getParentIndex(index), index);
            index = this.getParentIndex(index);
        }
    }

    remove() {
        if (this.heap.length === 0) return null;
        let item = this.heap[0];
        this.heap[0] = this.heap.pop();
        this.heapifyDown();
        return item;
    }

    heapifyDown() {
        let index = 0;
        while (this.hasLeftChildIndex(index)) {
            let smallestChildIndex = this.getLeftChildIndex(index);
            if (this.hasRighttChildIndex(index) && this.rightChild(index) < this.leftChild(index)) {
                smallestChildIndex = this.getRightChildindex(index);
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
        let output = ""
        for (let i = 0; i < this.heap.length; i++) {
            output += `${this.heap[i]} , `
        }
        console.log(output);
    }

}

let heap = new MinHeap();

heap.add(10);
heap.add(13);
heap.add(14);
heap.add(15);
heap.add(16);
heap.add(17);
heap.add(18);
heap.add(5);

heap.remove();

heap.printHeap()