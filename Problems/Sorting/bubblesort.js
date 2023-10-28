

// using dio while loop 
const bubbleSort1 = (arr1) => {
    let swapped;
    do {
        swapped = false;
        for (let i = 0; i < arr1.length - 1; i++) {
            if (arr1[i] > arr1[i + 1]) {
                // swap
                let temp = arr1[i];
                arr1[i] = arr1[i + 1];
                arr1[i + 1] = temp;
                swapped = true;
            }
        }
    } while (swapped);

    return arr1;

}



// using nested for loop.
const bublesort = (arr) => {
    let n = arr.length;
    for (let i = 0; i < n; i++) {
        let swapped = false;
        for (let j = 1; j < n - i; j++) {
            if (arr[j] < arr[j - 1]) {
                // swap

                let temp = arr[j];
                arr[j] = arr[j - 1];
                arr[j - 1] = temp;
                swapped = true;
            }
        }
        if (!swapped) {
            break;
        }
    }

    return arr;
}

let arr1 = [3, 4, 2, 1];

console.log(bublesort(arr1));