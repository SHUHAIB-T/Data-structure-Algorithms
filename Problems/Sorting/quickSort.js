// quck sort 
// complexity is worst casse O(n), best case is O(n log n)

const quickSort = (arr) => {

    // base condition
    if (arr.length <= 1) {
        return arr
    }

    let left = [];
    let right = [];
    let pivot = arr[0];

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < pivot) {
            left.push(arr[i]);
        } else {
            right.push(arr[i]);
        }
    }
    return quickSort(left).concat(pivot, quickSort(right));
}

let array = [4,5,2,3,1];

console.log(quickSort(array));