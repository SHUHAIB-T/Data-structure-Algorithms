// implimentastion of merge sort

function mergeSort(array) {
    // base condition
    if (array.length === 1) {
        return array;
    }
    let mid = parseInt(array.length / 2);
    let left = mergeSort(array.slice(0, mid));
    let right = mergeSort(array.slice(mid, array.length));

    return merge(left, right);
}

// merge two arrays into one
function merge(left, right) {
    const newArray = new Array(left.length + right.length);

    let i = 0;
    let j = 0;
    let k = 0;

    while (i < left.length && j < right.length) {
        if (left[i] < right[j]) {
            newArray[k] = left[i];
            i++;
        }else{
            newArray[k] = right[j];
            j++
        }
        k++;
    }

    // merging remaining elements
    while(i < left.length) {
        newArray[k] = left[i];
        i++
        k++;
    }
    while(j < right.length) {
        newArray[k] = right[j];
        j++
        k++;
    }

    return newArray;
}

let arr = [3,2,1,4,5];

console.log(mergeSort(arr));

// complexity of merge sort  is O( n log n);
