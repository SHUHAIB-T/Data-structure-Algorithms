// you are given an array of positive integers and a target, return the array with all the elements matching the target at the end of the array.

const targetAtEnd = (array, target) => {
    let i = 0;
    let j = array.length - 1;

    while (i < j) {
        if (array[i] === target) {
            if (array[j] === target) {
                j--;
            } else {
                let temp = array[i];
                array[i] = array[j];
                array[j] = temp;
            }
        } else {
            i++;
        }
    }
    return array;
}

console.log(targetAtEnd([2, 3, 1, 2, 2, 3, 6, 4], 2));