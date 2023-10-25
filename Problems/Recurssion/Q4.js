/*
Q4>>
find the sum of an array using recursion.
input=> arr = [1, 2, 3],
output=> 6
explanation : 1+2+3 = 6;
*/
function sumArray(arr) {
    if (arr.length === 0) {
        return 0; // base case
    }
    return arr[0] + sumArray(arr.slice(1));
}
console.log(sumArray([1, 2, 3]))