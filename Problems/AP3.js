// find the three largest number in the array.eg:
// Input: arr[] = {10, 4, 3, 50, 23, 90}
// Output: 90, 50, 23

// using javascript sort method.
const largestNumber = (arr) => {
    return arr.sort((a, b) => a - b).slice(arr.length - 3, arr.length);
}

let array = [10, 4, 3, 50, 23, 90];
console.log(largestNumber(array));


// Method with O(n) T and O(1) S.
const largestNumber1 = (arr) => {
    let num1 = num2 = num3 = -1;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > num1) {
            num3 = num2;
            num2 = num1;
            num1 = arr[i];
        } else if (arr[i] < num1 && arr[i] > num2) {
            num3 = num2;
            num2 = arr[i];
        } else if (arr[i] < num2 && arr[i] > num3) {
            num3 = arr[i];
        }
    }
    return [num1, num2, num3];
}
console.log(largestNumber(array));