/**
 * conut the appearence of each charecter.
 * @param {*} string 
 * @returns 
 */

function charechterCount(string) {
    let count = {};
    let str = string.split("");
    for (let i = 0; i < str.length; i++) {
        if (count[str[i]] >= 1) {
            count[str[i]]++;
        } else {
            count[str[i]] = 1;
        }
    }
    return count;
}
let string = "aabbcc";

console.log(charechterCount(string));