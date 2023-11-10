class MaxHeap {
    constructor() {
        this.heap = [];
    }

    getParentIndex(index) {
        return Math.floor((index - 1) / 2);
    }
    getLeftChildIndex(index) {
        return (2 * index + 1);
    }
    getRightChildIndex(index) {
        return (2 * index + 2);
    }

    leftChild(index) {
        return this.heap[this.getLeftChildIndex(index)];
    }

    rightChild(index) {
        return this.heap[this.getRightChildIndex(index)];
    }

    parent(index) {
        return this.heap[this.getParentIndex(index)];
    }

    hasParent(index) {
        return this.getParentIndex(index) >= 0;
    }
    hasLeftChild(index) {
        return this.getLeftChildIndex(index) < this.heap.length;
    }
    hasRightChild(index) {
        return this.getRightChildIndex(index) < this.heap.length;
    }

    add(item) {
        this.heap.push(item);
        this.heapifyUp();
    }

    swap(index1, index2) {
        [this.heap[index1], this.heap[index2]] = [this.heap[index2], this.heap[index1]];
    }

    heapifyUp() {
        let index = this.heap.length - 1;
        while (this.hasParent(index) && this.parent(index) < this.heap[index]) {
            this.swap(index, this.getParentIndex(index));
            index = this.getParentIndex(index);
        }
    }

    extract() {
        let value = this.heap[0];
        this.heap[0] = this.heap.pop();
        this.heapifyDown();
        return value;
    }

    heapifyDown() {
        let index = 0;
        while (this.hasLeftChild(index)) {
            let largestChildIndex = this.getLeftChildIndex(index);
            if (this.hasRightChild(index) && this.rightChild(index) > this.leftChild(index)) {
                largestChildIndex = this.getRightChildIndex(index);
            }

            if (this.heap[index] > this.heap[largestChildIndex]) {
                break;
            } else {
                this.swap(index, largestChildIndex);
            }
            index = largestChildIndex;
        }
    }

    display() {
        let output = "";
        for (let item of this.heap) {
            output += `${item} , `;
        }

        console.log(output);
    }
}

let heap = new MaxHeap();
heap.add(10);
heap.add(5);
heap.add(15);
heap.add(20);
heap.extract();

heap.display();