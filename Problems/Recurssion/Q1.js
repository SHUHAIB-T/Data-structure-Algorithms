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

// output 
console.log(factorial(4));