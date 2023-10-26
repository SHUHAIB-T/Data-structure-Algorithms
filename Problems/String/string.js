/**
 * Write a function to replace each alphabet in the given string with another alphabet  occurring at the n-th position from each of them.
 */

function replaceAlphabet(string, n) {
    
    // Create a mapping of alphabets to their shifted counterparts
    const alphabetMap = {};
    for (let i = 0; i < 26; i++) {
        const shiftedIndex = (i + n) % 26;
        alphabetMap[String.fromCharCode(65 + i)] = String.fromCharCode(65 + shiftedIndex);
        alphabetMap[String.fromCharCode(97 + i)] = String.fromCharCode(97 + shiftedIndex);
    }

    // Replace alphabets in the string using the mapping
    let newString = "";
    for (let char of string) {
        if (char in alphabetMap) {
            newString += alphabetMap[char];
        } else {
            newString += char;
        }
    }

    return newString;
}

// Example usage
const inputString = "hello worlz";
const shiftValue = 1;

const modifiedString = replaceAlphabet(inputString, shiftValue);
console.log(modifiedString);
