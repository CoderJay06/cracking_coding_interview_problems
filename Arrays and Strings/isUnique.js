/*
    Problem: 
        Implement an algorithm to determine if a string has all unique characters.
        What if you can't use additonal data structures?
*/

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

// solution brute force:
// runtime: O(s^2) space: O(1)
function isUnique(string) {
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

// solution optimized:
// time: O(n) space: O(n)
function optimizedIsUnique(string) {
      // cant be bigger than number of characters in alphabet
      if (string.length > 128) return false;

      const memo = {};
      for (let idx = 0; idx < string.length; idx++) {
          let char = string[idx];
          
          // already found this character, its duplicate
          if (memo[char]) {
              return false;
          }
          memo[char] = true;
      } 
      return true;
}

// simple tests:
console.log(isUnique("abc")); // true
console.log(isUnique("abcdef")); // true
console.log(isUnique("abcdd")); // false
console.log(isUnique("ddddd")); // false
console.log(isUnique("fffggghhh")); // false
console.log(isUnique("")); // true
console.log("-------------------------------")
console.log(optimizedIsUnique("abc")); // true
console.log(optimizedIsUnique("abcdef")); // true
console.log(optimizedIsUnique("abcdd")); // false
console.log(optimizedIsUnique("ddddd")); // false
console.log(optimizedIsUnique("fffggghhh")); // false
console.log(optimizedIsUnique("")); // true