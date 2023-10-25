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
console.log(power(3, 3));