/**
 * @param {Array}
 * @param {Number}
 */
// Binary search using recursion
let search = (arr, target, s, e) => {
    if (s > e) {
        return -1;
    }
    let mid = s + (e - s) / 2; // finding the middle of the function
    if (arr[mid] === target) {
        return mid;
    }
    if (arr[mid] < target) {
        return search(arr, target, mid + 1, e);
    } else {
        return search(arr, target, s, mid - 1);
    }
}
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
console.log(search(arr, 6, 0, arr.length - 1));