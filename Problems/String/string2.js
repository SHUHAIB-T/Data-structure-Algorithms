// reverse a string

let reverseString = (str) => {
    let s = 0;
    let e = str.length - 1;
    while (s < e) {
        let temp = str.charAt(s);
        str.charAt(s) = str.charAt(e);
        str.charAt(e) = temp;
        s++;
        e--;
    }
    return str;
}

console.log(reverseString("helow world"))