/*
    Problem: 
        Given two strings, write an algorithm to decide if one is a permutation of another.
*/

// Clarify problem:
    // - need to account for lowercase and uppercase ?  only lower
    // - string a permutation of string b or string b 
    //   permutation of string a ? string b permutation of a
    // - what should the return value be, boolean ? true or false

// steps to solve:
    // brute force:
        // - first, sort the string we'll be using to check for permutations
        // - step through other string 
        // - once we find a character matching first permutation string character
        // - sort set of characters from this character up to length of permutation string
        // - compare each character in string set to see if it matches permutation string
        // - if it matches, return true (its a permutation)
        // - otherwise return false (its not a permutation)

// what is the complexity:
    // big o time of O(s * b) exponential, space: O(n)


function checkPermutations(strA, strB) {
     console.log(strA, ' ',  strB);
     const sortedStrA = strA.split("").sort((a, b) => a.localeCompare(b));
     console.log(sortedStrA);
     let isPermutation = false;

     for (let idx = 0; idx < strB.length; idx++) {
         if (strB[idx] === strA[0]) {
             let sortedStrB = strB.split("").splice(idx, strA.length).sort((a, b) => a.localeCompare(b));
             let compareIdx = 1;
             while (compareIdx < strA.length) {
                 if (sortedStrB[compareIdx] === sortedStrA[compareIdx]) {
                    isPermutation = true;
                 }
                 compareIdx++;
             }
         }
     }
     return isPermutation;
}




// simple tests
console.log(checkPermutations("abc", "cbbaabcbaabcbabcaabccba")); // true
console.log(checkPermutations("abd", "cbb")); // false






