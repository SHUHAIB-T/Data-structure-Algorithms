/*
Q2 >>
    find nth fibonacii using recurssion.
*/
let fibonacci = (n) => {
    if (n < 2) {
        return n; // base condition
    }
    return fibonacci(n - 1) + fibonacci(n - 2);
}
console.log(fibonacci(4));
