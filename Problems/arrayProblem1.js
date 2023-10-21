// you are given a target and a array,return two number can get the sum as target


// funtion with o(1)S, o(n^2)T
function findTarget(array, target) {
    for (let i = 0; i < array.length - 1; i++) {
        for (let j = i + 1; j < array.length; j++) {
            if (array[i] + array[j] === target) {
                return new Array(array[i], array[j]);
            }
        }
    }

    return 0;
}

let array = [2, 4, 5, 6, 8, 3, 5, 6,];
let target = 10;

console.log(findTarget(array, target));

// method 2 o(n)S, o(n)T
function findTarget2(array, target) {
    let set = new Set();
    let match;
    for (let i = 0; i < array.length; i++) {
        let num = array[i];
        match = target - num;
        if (set.has(match)) {
            return [num, match];
        } else {
            set.add(num);
        }
    }

    return 0;
}
console.log(findTarget2(array, target));