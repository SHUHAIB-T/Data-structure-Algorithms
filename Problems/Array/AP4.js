// retun sum of unique elements in an array.
/**
 * @param {Array} arr 
 * @returns {int} 
 */

let sumOfUniqueElements = (arr) => {
    let result = 0;
    let set = new Set(arr);
    for (let i = 0; i < arr.length; i++) {
        if (set.has(arr[i])) {
            result += arr[i];
            set.delete(arr[i]);
        } else {
            if (!set.has(-arr[i])) {
                result -= arr[i];
                set.add(-arr[i]);
            }
        }
    }
    return result;
}

console.log(sumOfUniqueElements([1, 2, 1, 1, 1]));