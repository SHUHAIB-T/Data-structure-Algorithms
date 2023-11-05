// merge two sorted array;
/**
 * you are given two arrays, one wiith sorted in asscending order one with descending order merge two in ascending.
 */

let arr1 = [10, 20, 30];
let arr2 = [35, 25, 15];

let i = 0;
let j = arr2.length - 1;
let k = 0;

let sorted = new Array(arr1.length + arr2.length);

while (i < arr1.length || j >= 0) {
    if (arr1[i] < arr2[j]) {
        sorted[k] = arr1[i];
        i++;
    } else {
        sorted[k] = arr2[j];
        j--;
    }
    k++;
}

console.log(sorted);