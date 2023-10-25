// Linear Search
let array = [1, 4, 6, 7, 3, 6];
let key = 3;
// find the positon of the key id exist. else return -1;

const findKey = (arr, key) => {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === key) return i;
    }
    return -1;
}
console.log(findKey(array, key));