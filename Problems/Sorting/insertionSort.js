// best case o(n)
// o(n2) worst case.
// number of swaps reduced compared to bubble sort.
// stable sorting
// use for small value of n (size of the array)
// hybrid sorting

const insertionSort = (arr) => {
    for (i = 0; i < arr.length - 1; i++) {
        for (j = i + 1; j > 0; j--) {
            if (arr[j] < arr[j - 1]) {
                // swap
                let temp = arr[j]
                arr[j] = arr[j - 1];
                arr[j - 1] = temp;
            } else {
                break;
            }
        }
    }
    return arr;
}

let array = [5,4,2,1,3];

console.log(insertionSort(array))