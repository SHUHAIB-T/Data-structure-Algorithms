// retun fib as array

const fib = (n) => {
    if (n <= 0) {
        return [0];
    } else if (n === 1) {
        return [0, 1];
    } else {
        let fibArray = fib(n - 1);
        let next = fibArray[n - 1] + fibArray[n - 2];
        fibArray.push(next);
        return fibArray;
    }
}

console.log(fib(3))