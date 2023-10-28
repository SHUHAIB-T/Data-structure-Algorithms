
let arr = [3,2,1,4];

const selectionSort = (arr) => {

    for (let i = 0; i < arr.length -1; i++) {
        for (let j = i+1; j < arr.length; j++) {
            if(arr[i]>arr[j]){
                // swap 
                let temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }
    }

    return arr
}

console.log(selectionSort(arr))