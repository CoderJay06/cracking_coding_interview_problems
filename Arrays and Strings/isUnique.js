/*
    Problem: 
        Implement an algorithm to determine if a string has all unique characters.
        What if you can't use additonal data structures?
*/

// solution:
function isUnique(string) {
    // Clarify problem:
        // determine if string has only unique characters
        // return true if it doesnt, otherwise false\
        // Note: try not to use additonal ds
        // edge case:
            // string case mixed ? Only lowercase
            // length of string is 0 ? Return true
            // any special case involved ? No
            // only ASCII characters? Yes
    // Solve:
        // example 1: "abcdghaiks" == false
        // example 2: "abedcplonysz" == true
        // steps:
            // brute force solutin:
            // return true if string length <= 0
            // use a loop to iterate through string characters
            // use an inner loop to compare current character to the rest
            // if any characters occur more than once, return false
            // whats the Big O? O(n^2)
    
    // runtime: O(s^2) space: O(1)
    let result = true;

    // iterate string and compare charcaters
    for (let idx = 0; idx < string.length; idx++) {
        for (let nextIdx = idx + 1; nextIdx < string.length; nextIdx++) {
            if (string[idx] === string[nextIdx]) {
                result = false;
            }
        }
    }

    return result;
}

// simple tests:
console.log(isUnique("abc")); // true
console.log(isUnique("abcdef")); // true
console.log(isUnique("abcdd")); // false
console.log(isUnique("ddddd")); // false
console.log(isUnique("fffggghhh")); // false
console.log(isUnique("")); // true