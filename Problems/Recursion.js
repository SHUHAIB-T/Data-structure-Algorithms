/*
Q1>>
return the factorial of a number using recursion.
 */
let factorial = (n) => {
    if (n == 1) {
        return 1; //base condition
    }
    return n * (factorial(n - 1));
}

/*
Q2>>
find nth fibonacii using recurssion.
*/
let fibonacci = (n) => {
    if (n < 2) {
        return n; // base condition
    }
    return fibonacci(n - 1) + fibonacci(n - 2);
}

/*
Q3>>
you are given two numbers a,b 
write a function which return a^b.
*/
function power(a, b) {
    if (b == 1) {
        return a; //base case
    }
    return a * power(a, b - 1);
}

/*
Q4>>
find the sum of an array using recursion.
input=> arr = [1, 2, 3],
output=> 6
explanation : 1+2+3 = 6;
*/

function sumArray(arr) {
    if (arr.length === 0) {
        return 0; // base case
    }
    return arr[0]+sumArray(arr.slice(1));
}

console.log(sumArray([1, 2, 3]))