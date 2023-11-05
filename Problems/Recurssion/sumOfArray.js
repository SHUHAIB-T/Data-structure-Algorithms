const sumOfArray = (arr) => {
    if(arr.length === 1) {
        return arr[0];
    }
    let last = arr.pop();
    return last + sumOfArray(arr);
}
console.log(sumOfArray([1,2,3,4,5]));